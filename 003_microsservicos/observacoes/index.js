const express = require('express')
const { v4: uuidv4 } = require('uuid') // Ajuste 1: Importação correta do UUID
const app = express()
app.use(express.json())

// Ajuste 2: O nome aqui deve ser igual ao que você usa nas rotas
const observacoesPorLembreteId = {}

app.get('/lembretes/:id/observacoes', (req, res) => {
    // Busca as observações pelo ID que vem na URL
    res.send(observacoesPorLembreteId[req.params.id] || [])
})

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4() // Ajuste 3: Chamada da função v4
    const { texto } = req.body
    const idLembrete = req.params.id // ID que vem da URL (:id)

    // Pega a lista existente ou cria uma nova vazia
    const observacoesDoLembrete = observacoesPorLembreteId[idLembrete] || []
    
    // Adiciona a nova observação
    observacoesDoLembrete.push({ id: idObs, texto })
    
    // Salva de volta no objeto principal
    observacoesPorLembreteId[idLembrete] = observacoesDoLembrete 
    
    // 201 é o status ideal para "Created" (Criado)
    res.status(201).send(observacoesDoLembrete)
})

app.listen(5000, () => {
    console.log('Observações. Porta 5000.')
})