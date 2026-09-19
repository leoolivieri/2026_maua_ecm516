const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const URL_LEMBRETES = process.env.URL_LEMBRETES || 'http://localhost:4000'
const URL_OBSERVACOES = process.env.URL_OBSERVACOES || 'http://localhost:5001'
const URL_CONSULTA = process.env.URL_CONSULTA || 'http://localhost:6000'

const lembretes = { }
let contador = 0

function montaLembrete(lembrete) {
    return {
        id: lembrete.id,
        texto: lembrete.texto,
        _links: {
            self: { href: `${URL_LEMBRETES}/lembretes/${lembrete.id}`, method: 'GET' },
            colecao: { href: `${URL_LEMBRETES}/lembretes`, method: 'GET' },
            observacoes: { href: `${URL_OBSERVACOES}/lembretes/${lembrete.id}/observacoes`, method: 'GET' },
            criarObservacao: { href: `${URL_OBSERVACOES}/lembretes/${lembrete.id}/observacoes`, method: 'POST' }
        }
    }
}

app.get('/', (req, res) => {
    res.send({
        _links: {
            self: { href: `${URL_LEMBRETES}/`, method: 'GET' },
            lembretes: { href: `${URL_LEMBRETES}/lembretes`, method: 'GET' },
            criar: { href: `${URL_LEMBRETES}/lembretes`, method: 'POST' }
        }
    })
})

app.get('/lembretes', (req, res) => {
    res.send({
        _links: {
            self: { href: `${URL_LEMBRETES}/lembretes`, method: 'GET' },
            criar: { href: `${URL_LEMBRETES}/lembretes`, method: 'POST' },
            consulta: { href: `${URL_CONSULTA}/lembretes`, method: 'GET' }
        },
        itens: Object.values(lembretes).map(montaLembrete)
    })
})

app.get('/lembretes/:id', (req, res) => {
    const lembrete = lembretes[req.params.id]
    if (!lembrete) return res.status(404).send({ erro: 'Lembrete nao encontrado' })
    res.send(montaLembrete(lembrete))
})

app.post('/lembretes', async (req, res) => {
    const { texto } = req.body || {}
    if (!texto) return res.status(400).send({ erro: 'Campo "texto" e obrigatorio' })

    contador++
    const lembrete = { id: contador, texto }
    lembretes[contador] = lembrete

    await axios.post('http://ecm516-20262-barramento-de-eventos-service:10000/eventos', {
        tipo: 'LembreteCriado',
        dados: { id: contador, texto }
    })

    res.status(201)
        .location(`${URL_LEMBRETES}/lembretes/${contador}`)
        .send(montaLembrete(lembrete))
})

app.post('/eventos', (req, res) => {
    const evento = req.body
    console.log(evento)
    res.end()
})

const port = 4000
app.listen(port, () => {
	console.log(`Lembretes. Porta ${port}.`)
})
