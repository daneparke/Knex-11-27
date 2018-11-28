const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.getAll().then(response => res.send(response))
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    queries.getById(id).then(response => res.send(response))
})



const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)