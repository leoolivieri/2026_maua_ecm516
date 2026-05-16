const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const lembretes = {}
let contador = 0

// responde requisições de leitura e consulta
app.get('/lembretes', (req, res) => {
    res.send(lembretes) // retorna todos os lembretes
})

// responde requisições de criação: é chamado quando quer cirar ou enviar um dado novo
app.post('/lembretes', async (req, res) => {
    contador++
    const { texto } = req.body // pega o texto enviado pelo cliente
    lembretes[contador] = {contador, texto} // salva no objeto

    // emite evento para barramento de eventos
    // porta 10000 é onde o barramento de eventos está rodando
    await axios.post("http://localhost:10000/eventos", {
        tipo: 'LembreteCriado',
        dados: {contador, texto} // equivale a { contador: 1, texto: "Fazer café" }
    })
    // uso do async await: o código só continua depois que a requisição for feita, ou seja, depois que o evento for enviado para o barramento de eventos
    //Ordem garantida — o res.send só executa depois que o axios terminar

    res.status(200).send(lembretes[contador]) // retorna o lembrete criado
})

app.post ('/eventos', (req, res) => {
    console.log('Recebido evento', req.body.tipo)
    res.end({})
})

app.listen(4000, () => {
    console.log('Lembretes. Porta 4000.')
})