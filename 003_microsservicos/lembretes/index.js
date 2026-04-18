const express = require('express')
const app = express()
app.use(express.json()) //midleware
const lembretes = { }
let id = 0 

/* { 
        1:{
            id : 1
            texto : 'fazer café'
            },
        2:{
            id : 2,
            texto: 'Natacao'
        }
    } 
        */
app.get('/lembretes', (req, res) => {
    res.json(lembretes)
})

// Rota de cadastro
app.post('/lembretes', (req, res) => {
    //incrementar o id
    id++
    //extrair a propriedade texto do corpo req
    const { texto} = req.body
    //cadastrar na base, tal como o exemplo
    lembretes[id] = {
        id: id,
        texto: texto
    }
    //responder trocando o status para 201 e, no corpo,, incluir o lembrete criado
    res.status(201).json(lembretes[id])
})

const port = 4000
app.listen(port, () => {
    console.log(`lembretes. Porta ${port}`)
})