const axios = require('axios')
const express = require('express')
const { v4: uuidV4 } = require('uuid')
const app = express()
app.use(express.json())

const URL_LEMBRETES = process.env.URL_LEMBRETES || 'http://localhost:4000'
const URL_OBSERVACOES = process.env.URL_OBSERVACOES || 'http://localhost:5001'

const observacoesPorLembreteId = {}

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes =
            observacoesPorLembreteId[observacao.lembreteId]
        if (!observacoes) return
        const obsParaAtualizar =
            observacoes.find(o => o.id === observacao.id)
        if (!obsParaAtualizar) return
        obsParaAtualizar.status = observacao.status
        axios.post('http://ecm516-20262-barramento-de-eventos-service:10000/eventos', {
            tipo: "ObservacaoAtualizada",
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        }).catch(() => {})
    }
}

function montaObservacao(observacao, lembreteId) {
    const links = {
        self: { href: `${URL_OBSERVACOES}/lembretes/${lembreteId}/observacoes/${observacao.id}`, method: 'GET' },
        lembrete: { href: `${URL_LEMBRETES}/lembretes/${lembreteId}`, method: 'GET' }
    }
    if (observacao.status === 'aguardando') {
        links.classificacao = {
            href: `${URL_OBSERVACOES}/lembretes/${lembreteId}/observacoes/${observacao.id}`,
            method: 'GET',
            info: 'classificacao em andamento'
        }
    } else {
        links.reclassificar = {
            href: `${URL_OBSERVACOES}/lembretes/${lembreteId}/observacoes/${observacao.id}/reclassificar`,
            method: 'POST'
        }
    }
    return { id: observacao.id, texto: observacao.texto, status: observacao.status, _links: links }
}

app.get('/', (req, res) => {
    res.send({
        _links: {
            self: { href: `${URL_OBSERVACOES}/`, method: 'GET' }
        }
    })
})

//:id é um placeholder
//exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    const { id } = req.params
    const observacoes = observacoesPorLembreteId[id] || []
    res.send({
        _links: {
            self: { href: `${URL_OBSERVACOES}/lembretes/${id}/observacoes`, method: 'GET' },
            criar: { href: `${URL_OBSERVACOES}/lembretes/${id}/observacoes`, method: 'POST' },
            lembrete: { href: `${URL_LEMBRETES}/lembretes/${id}`, method: 'GET' }
        },
        itens: observacoes.map(o => montaObservacao(o, id))
    })
})

app.get('/lembretes/:id/observacoes/:idObs', (req, res) => {
    const { id, idObs } = req.params
    const observacoes = observacoesPorLembreteId[id] || []
    const observacao = observacoes.find(o => o.id === idObs)
    if (!observacao) return res.status(404).send({ erro: 'Observacao nao encontrada' })
    res.send(montaObservacao(observacao, id))
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
   try {
        const { id } = req.params
        const { texto } = req.body || {}
        if (!texto) return res.status(400).send({ erro: 'Campo "texto" e obrigatorio' })

        const idObs = uuidV4()
        const observacao = { id: idObs, texto, status: 'aguardando' }
        const observacoesDoLembrete = observacoesPorLembreteId[id] || []
        observacoesDoLembrete.push(observacao)
        observacoesPorLembreteId[id] = observacoesDoLembrete

        await axios.post('http://ecm516-20262-barramento-de-eventos-service:10000/eventos', {
            tipo: 'ObservacaoCriada',
            dados: {
                id: idObs,
                texto,
                lembreteId: id,
                status: 'aguardando'
            }
        })

        res.status(201)
            .location(`${URL_OBSERVACOES}/lembretes/${id}/observacoes/${idObs}`)
            .send(montaObservacao(observacao, id))
    } catch(e) {
        console.error(e)
        res.status(500).send({ erro: e.message })
    }
})

app.post('/lembretes/:id/observacoes/:idObs/reclassificar', async (req, res) => {
    const { id, idObs } = req.params
    const observacoes = observacoesPorLembreteId[id] || []
    const observacao = observacoes.find(o => o.id === idObs)
    if (!observacao) return res.status(404).send({ erro: 'Observacao nao encontrada' })

    observacao.status = 'aguardando'
    await axios.post('http://ecm516-20262-barramento-de-eventos-service:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: observacao.id,
            texto: observacao.texto,
            lembreteId: id,
            status: 'aguardando'
        }
    })

    res.status(200).send(montaObservacao(observacao, id))
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log('Recebido evento', req.body.tipo)
    try { funcoes[evento.tipo](evento.dados) } catch (e) {}
    res.status(200).send({})
})


app.listen(5001, (() => {
    console.log('Observacoes. Porta 5001.')
}))
