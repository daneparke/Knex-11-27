const express = require('express')
const app = express()
const port = process.env.PORT || 3003
const queries = require('./queries')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    queries.getAll().then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    const { id } = req.params
    queries.getById(id).then(student => res.send(student))
})

app.post('/', (req, res) => {
    queries.createStudent(req.body).then(res.status(201))
})


const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)