const axios = require('axios')
const express = require('express')
const app = express()
app.use(express.json())



app.post('/eventos', async function   (req, res) {
    const evento = req.body
    console.log('Evento recebido:', evento)
    
    try {//envia o evento para o microsserviço de lembretes
        await axios.post('http://localhost:4000/eventos', evento)
    }
    catch(e) {}
    try {
        //envia o evento para o microsserviço de observações
        await  axios.post('http://localhost:5001/eventos', evento)
    }
    catch(e) {}
    try {
        //envia o evento para o microsserviço de consulta
        await axios.post('http://localhost:6000/eventos', evento)
    } catch (e) {}

    try{
        //envia o evento para o microsservico de classificacao
        await axios.post('http://localhost:7000/eventos', evento)
    } catch (e){}
    res.end()
})

//colocar  barramento de eventos em funcionamento na porta 10000
const port = 10000
app.listen(port, () => {
    console.log(`Barramento de eventos. Porta ${port}.`)
})

