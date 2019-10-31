const express = require('express')
const rota = express.Router()

rota.get('/postagens', (req, res) =>{
  res.json({
    titulo: 'meu primeiro post',
    conteudo: 'valos la mais uma vez tentar fazer com q funcione',
    autor: 'Iago Daflon'
   })
})

module.exports = rota