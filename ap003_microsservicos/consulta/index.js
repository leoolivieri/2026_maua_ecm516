const express = require('express')
const app = express()
app.use(express.json())

const URL_LEMBRETES = process.env.URL_LEMBRETES || 'http://localhost:4000'
const URL_OBSERVACOES = process.env.URL_OBSERVACOES || 'http://localhost:5001'
const URL_CONSULTA = process.env.URL_CONSULTA || 'http://localhost:6000'

const baseConsulta = {}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = { id: lembrete.id, texto: lembrete.texto, observacoes: [] }
    },
    ObservacaoCriada: (observacao) => {
        const lembrete = baseConsulta[observacao.lembreteId]
        if (!lembrete) return
        lembrete.observacoes.push(observacao)
    },
    ObservacaoAtualizada: (observacao) => {
        const lembrete = baseConsulta[observacao.lembreteId]
        if (!lembrete) return
        const indice = lembrete.observacoes.findIndex(o => o.id === observacao.id)
        if (indice === -1) return
        lembrete.observacoes[indice] = observacao
    }
}

function montaLembrete(lembrete) {
    return {
        id: lembrete.id,
        texto: lembrete.texto,
        observacoes: lembrete.observacoes,
        _links: {
            self: { href: `${URL_CONSULTA}/lembretes/${lembrete.id}`, method: 'GET' },
            lembreteOriginal: { href: `${URL_LEMBRETES}/lembretes/${lembrete.id}`, method: 'GET' },
            observacoes: { href: `${URL_OBSERVACOES}/lembretes/${lembrete.id}/observacoes`, method: 'GET' }
        }
    }
}

app.get('/lembretes', (req,res) => {
    res.status(200).json({
        _links: {
            self: { href: `${URL_CONSULTA}/lembretes`, method: 'GET' }
        },
        itens: Object.values(baseConsulta).map(montaLembrete)
    })
})

app.get('/lembretes/:id', (req, res) => {
    const lembrete = baseConsulta[req.params.id]
    if (!lembrete) return res.status(404).send({ erro: 'Lembrete nao encontrado' })
    res.status(200).json(montaLembrete(lembrete))
})

app.post('/eventos', (req,res) => {
   try{
     const evento = req.body
    console.log(evento)
    // polimorfismo dinamico ou if else implícito
    funcoes [evento.tipo](evento.dados)
   }
    catch(e){}
    res.status(200).send({})
})

app.listen( 6000, () => console.log( "consulta. Porta 6000."))
