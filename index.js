const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const port = 3001

app.listen(port, () => {
  console.log("server runing on http://localhost:", port)
})
