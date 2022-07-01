// requiring mongoose: 
const mongoose = require('mongoose')
const { Schema } = mongoose 

// make schema:
const bookSchema = new Schema({
    title: { type: String, required: true },
    description: String,
    year: Number,
    quantity: Number,
    imageURL: String
})

// model + export: 
const Book = mongoose.model('Book', bookSchema)
module.exports = Book