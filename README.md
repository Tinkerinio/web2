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
