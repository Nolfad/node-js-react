const express = require('express')
const rota = express.Router()
const ibmdb = require('ibm_db')
rota.get('/postagens', (req, res) =>{
ibmdb.open('DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=wmq55941;PWD=m3gmrzl-zpbp9w4g;',(err, conne) =>{
  if(err){
    return console.log('error:', err)
  }
  conne.query('select 1 from sysibm.sysdummy1',(err,data) =>{
    if(err){
      return console.log('error:', err)
    }else {
      console.log('data:',data)
    }
    conne.close( () => {
      console.log('conexão encerrada')
    })
  })
})

  res.json({
    titulo: 'meu primeiro post',
    conteudo: 'valos la mais uma vez tentar fazer com q funcione',
    autor: 'Iago Daflon'
   })
})

module.exports = rota