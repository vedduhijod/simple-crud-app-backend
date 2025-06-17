# simple-crud-app-backend

This is a robust backend API built with **Node.js**, **Express.js**, and **MongoDB**, designed to perform CRUD operations on `Product` data. It follows clean code principles, scalable architecture, and includes a complete Postman API collection for testing.

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [📦 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [📬 API Endpoints](#-api-endpoints)
- [🧪 Postman API Collection](#-postman-api-collection)
- [📈 Future Improvements](#-future-improvements)
- [📄 License](#-license)

---

## ✨ Features

- ✅ RESTful CRUD routes for `Product`
- ✅ MongoDB database connection via Mongoose
- ✅ MVC folder structure
- ✅ Centralized error handling
- ✅ Easy API testing with Postman collection
- ✅ Ready for production-level enhancements (auth, validation, logging)

---

## 📦 Tech Stack

| Tech        | Description                    |
|-------------|--------------------------------|
| Node.js     | JavaScript runtime             |
| Express.js  | Web framework                  |
| MongoDB     | NoSQL database                 |
| Mongoose    | MongoDB ODM                    |
| Dotenv      | Environment variable manager   |
| Postman     | API testing & documentation    |

---

## 📁 Project Structure

simple-crud-app/
├── controllers/ # Controller logic for API
│ └── product.controller.js
├── models/ # Mongoose schemas
│ └── product.model.js
├── routes/ # Route definitions
│ └── product.route.js
├── postman/ # Postman collection file
│ └── product-api.postman_collection.json
├── config/
│ └── db.js # MongoDB connection config
├── .env # Environment variables
├── app.js # Express app setup
├── server.js # Entry point
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vedduhijod/simple-crud-app-backend.git
cd simple-crud-app-backend/simple-crud-app
2. Install dependencies
bash
Copy
Edit
npm install
3. Set up environment variables
Create a .env file in the root directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>
4. Run the server
bash
Copy
Edit
npm run dev
Server will be running on http://localhost:5000

🔐 Environment Variables
Key	Description
PORT	Port for backend server
MONGO_URI	MongoDB connection string

📬 API Endpoints (Product)
Method	Endpoint	Description
POST	/api/products	Add a new product
GET	/api/products	Get all products
GET	/api/products/:id	Get single product by ID
PUT	/api/products/:id	Update product by ID
DELETE	/api/products/:id	Delete product by ID

🧪 Postman API Collection
We’ve included a ready-to-import Postman collection.

📥 Download Collection
How to Use:
Open Postman

Click Import → Upload the .json file

Start testing endpoints (POST, GET, PUT, DELETE)

Ensure the server is running on localhost:5000

💡 You can also add environment variables in Postman for base_url.

📈 Future Improvements
🔒 JWT Authentication & Role-based Access

✅ Schema validation using Joi or Zod

📦 Dockerize the application

🌐 CORS and security middleware (helmet, xss-clean)

📊 Logging using winston or morgan

✅ Unit tests with Jest / Supertest

📄 License
This project is open-source and available under the MIT License.

🙌 Acknowledgements
Created by Ved Duhijod
GitHub: @vedduhijod
