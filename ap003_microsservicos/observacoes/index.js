const axios = require('axios')
const express = require('express')
const { v4: uuidV4 } = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

//:id é um placeholder
//exemplo: /lembretes/12/observacoes
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidV4()
    const { texto } = req.body
    const id = req.params.id

    const observacoesDoLembrete = observacoesPorLembreteId[id] || []
    observacoesDoLembrete.push({ id: idObs, texto})
    observacoesPorLembreteId[id] = observacoesDoLembrete
    await axios.post('http://localhost:5002/observacoes', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs,
            texto,
            lembreteId: id
        }   
    })
    res.status(201).send(observacoesDoLembrete)
})

app.post('/eventos', (req, res) => {
    console.log('Recebido evento', req.body.tipo)
    res.end({})
})


app.listen(5001, (() => {
    console.log('Observacoes. Porta 5001.')
}))