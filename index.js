require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/google', (req, res) => {
    res.send('Hello Google!')
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})