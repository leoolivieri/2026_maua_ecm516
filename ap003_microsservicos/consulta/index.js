const express = require('express')
const app = express()
app.use(express.json())

const baseConsulta = {} 

const funcoes = {
    lembreteCriado: (lembrete) => {
        baseConsulta[lembrete.contador] = lembrete

    },
    observacaoCriada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    }
} 

app.get('/lembretes', (req,res) => {
    res.status(200).json(baseConsulta)
})

app.post('/eventos', (req,res) => {
   try{
     const evento = req.body
    console.log(evento)
    // polimorfismo dinamico ou if else implícito
    funcoes [evento.tipo](evento.dados)
   }
    catch(e){
        res.end()
    }
})

app.listen( 6000, () => console.log( "consulta. Porta 6000."))