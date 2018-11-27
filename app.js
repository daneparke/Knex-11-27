const express = require('express')
const app = express()
const port = process.env.Port || 3003



const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)