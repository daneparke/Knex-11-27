const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const queries = require('./queries')

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})


const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)