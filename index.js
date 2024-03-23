const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/wowrack', (req, res) => {
  res.send('selamat sore!')
})

app.get('/test', (req, res) => {
  res.send('test 123')
})

app.get('/posts', (req, res) => {
  res.send([
    {
      id: 1,
      title: 'lorem'
    },
    {
      id: 2,
      title: 'ipsum'
    },
  ])
})

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = server;
