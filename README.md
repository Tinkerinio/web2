# Online Library

**WEB Technologies 2 (Back End)**  
**Final Project**  
**“Online Library”**  
**SE-2323**  
**Students**: Kydyrbek M., Zhumaseitov M., Yernazarov A.

---

## Overview

The Online Library is a web application built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to register, log in, and manage their profiles. Admins can add, update, and delete books, while users can add books to their profiles. The application uses **EJS** for server-side rendering and **MongoDB Atlas** for data storage.

---

## Features

- **User Authentication**:
  - Register new users with email, password, and role (user or admin).
  - Log in with email and password.
  - Logout functionality.
- **Role-Based Access Control**:
  - Admins can add, update, and delete books.
  - Users can add books to their profiles.
- **Book Management**:
  - Admins can perform CRUD operations on the book collection.
  - Users can view the book collection and add books to their profiles.
- **Responsive Design**:
  - Clean and modern user interface with responsive styling.

---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose)
- **Frontend**:
  - EJS (Embedded JavaScript templates)
  - CSS (for styling)
- **Authentication**:
  - Express-session (for session management)
  - bcrypt (for password hashing)
- **Deployment**:
  - MongoDB Atlas (for cloud database)
  - Render (for deployment web server)

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Tinkerinio/web2.git
   cd web2

## Install Dependencies

```bash
npm install
```

## API Documentation

### Authentication

- **POST /register**: Register a new user.
  - **Request Body**:
    ```json
    {
      "name": "Alex",
      "email": "Alex123@example.com",
      "password": "password123",
      "role": "user"
    }
    ```
  - **Response**: Redirects to `/login` on success.

- **POST /login**: Log in a user.
  - **Request Body**:
    ```json
    {
      "email": "Alex123@example.com",
      "password": "password123"
    }
    ```
  - **Response**: Redirects to `/dashboard` on success.

- **GET /logout**: Log out the user.
  - **Response**: Redirects to `/`.

### Dashboard

- **GET /dashboard**: Display the user's dashboard.
  - **Response**: Renders `dashboard.ejs`.

### Library

- **GET /library**: Display the book collection.
  - **Response**: Renders `library.ejs`.

### Admin Books

- **GET /admin-books**: Display the admin books page (for admins only).
  - **Response**: Renders `admin-books.ejs`.

- **POST /admin-books/add**: Add a new book (for admins only).
  - **Request Body**:
    ```json
    {
      "title": "Book Title",
      "author": "Book Author",
      "genres": "Genre1, Genre2"
    }
    ```
  - **Response**: Redirects to `/admin-books` on success.

- **POST /admin-books/delete**: Delete a book (for admins only).
  - **Request Body**:
    ```json
    {
      "bookId": "book_id"
    }
    ```
  - **Response**: Redirects to `/admin-books` on success.

### User Profile

- **GET /user-profile**: Display the user's profile with their added books.
  - **Response**: Renders `user-profile.ejs`.

- **POST /user-profile/add**: Add a book to the user's profile.
  - **Request Body**:
    ```json
    {
      "bookId": "book_id"
    }
    ```
  - **Response**: Redirects to `/user-profile` on success.


## Division of Work

### Alsalim:
- Connection with MongoDB Atlas
- Working with backend (routes)
- Creating collections (models in VSCode)

### Miras:
- Frontend (working with EJS files)
- Connecting files with each other

### Magzhan:
- Backend (server.js, Express.js)
- Connecting routes between project files
