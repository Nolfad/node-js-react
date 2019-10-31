const express = require('express')
const rota = express.Router()

rota.get('/comentarios/:postid', (req, res) =>{
  res.json({
    conteudo: 'é isso ai loco, ta indo bem',
    autor: 'Anonimous'
   })
})

module.exports = rota