const express = require('express')
const rota = require('express').Router()
rota.use('/', require('./postagens'))
rota.use('/', require('./comentarios'))
module.exports = rota