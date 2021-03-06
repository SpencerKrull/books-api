// dependencies
const express = require('express')
const mongoose = require('mongoose')

// configuration
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// middleware
app.use(express.urlencoded({extended: true}))

// routes
app.get('/', (req, res) => {
  res.send('Welcome to the Books API!')
})

// books
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)

// 404
app.get('*', (req, res) => {
  res.send('404')
})

// listen
app.listen(PORT, () => {
  console.log('Greetings! From port: ', PORT);
})