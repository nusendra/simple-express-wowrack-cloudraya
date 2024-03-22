const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT | 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/test', (req, res) => {
  res.send('test 123')
})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = server;
