const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genres: [{ type: String }],
    addedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Track who added the book
});

module.exports = mongoose.model('Book', bookSchema);