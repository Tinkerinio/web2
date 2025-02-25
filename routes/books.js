const express = require('express');
const { protect, isAdmin } = require('../middleware/authMiddleware');
const { addBook, getAllBooks, deleteBook, addBookToUser } = require('../controllers/bookController');
const router = express.Router();

router.post('/', protect, isAdmin, addBook);
router.get('/', protect, getAllBooks);
router.delete('/:id', protect, isAdmin, deleteBook);
router.post('/users/books', protect, addBookToUser);

module.exports = router;