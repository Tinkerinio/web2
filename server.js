const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
const path = require('path');
const User = require('./models/User');
const Book = require('./models/Book');

dotenv.config();
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Session
app.use(session({
    secret: process.env.SESSION_SECRET || 'supersecretkey',
    resave: false,
    saveUninitialized: false
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.log('MongoDB Error:', err));

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
    if (!req.session.userId) return res.redirect('/login');
    next();
};

// Middleware to check admin role
const isAdmin = (req, res, next) => {
    if (req.session.role !== 'admin') return res.redirect('/dashboard');
    next();
};

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/login', (req, res) => res.render('login', { message: null }));
app.get('/register', (req, res) => res.render('register', { message: null }));

// Dashboard
app.get('/dashboard', isAuthenticated, async (req, res) => {
    const user = await User.findById(req.session.userId);
    res.render('dashboard', { user });
});

// Library (Main Page)
app.get('/library', isAuthenticated, async (req, res) => {
    try {
        const books = await Book.find();
        res.render('library', { books });
    } catch (err) {
        res.render('error', { message: 'Error fetching books!' });
    }
});

// Admin Books (CRUD Operations)
app.get('/admin-books', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const books = await Book.find();
        res.render('admin-books', { books });
    } catch (err) {
        res.render('error', { message: 'Error fetching books!' });
    }
});

// Admin: Add Book
app.post('/admin-books/add', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const { title, author, genres } = req.body;
        const book = new Book({ title, author, genres, addedBy: req.session.userId });
        await book.save();
        res.redirect('/admin-books');
    } catch (err) {
        res.render('error', { message: 'Error adding book!' });
    }
});

// Admin: Delete Book
app.post('/admin-books/delete', isAuthenticated, isAdmin, async (req, res) => {
    try {
        const { bookId } = req.body;
        await Book.findByIdAndDelete(bookId);
        res.redirect('/admin-books');
    } catch (err) {
        res.render('error', { message: 'Error deleting book!' });
    }
});

// Register
app.post('/register', async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.render('register', { message: 'All fields are required!' });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.render('register', { message: 'Email already exists!' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role });
        await user.save();

        res.redirect('/login');
    } catch (err) {
        res.render('register', { message: 'Registration error!' });
    }
});

// Login
app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) return res.render('login', { message: 'User not found!' });
        if (!(await bcrypt.compare(password, user.password))) return res.render('login', { message: 'Invalid password!' });

        req.session.userId = user._id;
        req.session.role = user.role;
        res.redirect('/dashboard');
    } catch (err) {
        res.render('login', { message: 'Login error!' });
    }
});

// Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

// Error Page
app.get('/error', (req, res) => res.render('error', { message: 'Something went wrong!' }));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));