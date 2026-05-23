const axios = require('axios')
const express = require('express')
const { v4: uuidV4 } = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        const observacoes = 
            observacoesPorLembreteId[observacao.lembreteId]
        const obsParaAtualizar = 
            observacoes.find(o => o.id === observacao.id)
        obsParaAtualizar.status = observacao.status
        axios.post('http://localhost:10000/eventos', {
            tipo: "ObservacaoAtualizada",
            dado: {
                id: observacao.id,
                texto: observacao.texto,
                lembrete: observacao.lembreteId,
                status: observacao.status
            }

        })

    }
}

//:id é um placeholder
//exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
   try {
        const { id } = req.params
        const { texto } = req.body
        const idObs = uuidV4()
    const observacoesDoLembrete = observacoesPorLembreteId[id] || []
    observacoesDoLembrete.push({ id: idObs, texto, status: 'aguardando'})
    observacoesPorLembreteId[id] = observacoesDoLembrete
    await axios.post('http://localhost:5002/observacoes', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs,
            texto,
            lembreteId: id,
            status: 'aguardando'
        }   
    })
    res.status(201).send(observacoesDoLembrete)
    } catch(e) {
        console.error(e)
        res.status(500).send({ erro: e.message })
    }
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log('Recebido evento', req.body.tipo)
    res.end({})
})


app.listen(5001, (() => {
    console.log('Observacoes. Porta 5001.')
}))