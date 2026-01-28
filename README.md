# Express Session Management with MongoDB

This project demonstrates how to implement **session management** in a Node.js application using **Express**, **express-session**, and **MongoDB** for persistent session storage.

It was created as part of **internship learning / backend practice** to understand how user sessions work in real applications.

---

## 📌 Features

- Create and store sessions using `express-session`
- Persist sessions in MongoDB using `connect-mongo`
- Store user data inside session
- Access session data across multiple routes
- Destroy session manually
- Cookie-based session expiration

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- express-session
- connect-mongo

---

## 📂 Project Structure

├── app.js
├── package.json
├── README.md
└── .env (not pushed to GitHub)




Server runs at:
http://localhost:3000

Routes
/ – Check if session exists

/setUsername – Create session and store username

/getUsername – Get username from session

/destroy – Destroy session

Author
Swaraj Salunkhe
