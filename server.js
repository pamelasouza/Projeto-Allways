const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('home'))

app.listen(port, () => {
    console.log(`Rodando http://localhost:${port}`)
})
