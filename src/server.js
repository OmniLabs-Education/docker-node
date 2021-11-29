const express = require('express')

const app = express()

app.get('/test', (req, res) => {
  console.log('a')

  return res.json({ message: "teste" })
})

app.listen(3000, () => console.log('Server is running'))