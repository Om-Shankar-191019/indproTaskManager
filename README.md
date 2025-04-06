# 🗂️ Task Manager App — MERN Stack Project
A modern and user-friendly Task Manager built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) that allows users to manage daily tasks efficiently with features like filtering, searching, summaries, and more.

✅ Built with clean architecture, scalable folder structure, and responsive UI.

# 🔗 Live Demo
https://indprotaskmanager.onrender.com

# For testing purpose :
username : testuser
email : testuser@xyz.com
password : testuser@xyz

# 🛠️ Features
🔐 Authentication (JWT)

✍️ Add / Edit / Delete Tasks

🧠 Search Tasks with debounced input

🧰 Filter by Status, Priority, Category

📊 Summary Page showing task analytics

🌐 REST API integrated with React Context

🎨 Responsive Design using Tailwind CSS

# Folder Structure (Clean & Scalable)

📦root
┣ 📂client # React Frontend
┃ ┣ 📂components
┃ ┣ 📂context
┃ ┣ 📂hooks
┃ ┣ 📂pages
┃ ┣ 📜App.jsx
┃ ┗ 📜main.jsx
┣ 📂server # Express Backend
┃ ┣ 📂controllers
┃ ┣ 📂middlewares
┃ ┣ 📂models
┃ ┣ 📂routes
┃ ┗ 📜server.js
┣ 📜.env
┣ 📜README.md
┗ 📜package.json

# ⚙️ How to Run Locally

1.  Clone the Repository

    git clone https://github.com/Om-Shankar-191019/indproTaskManager.git
    cd indproTaskManager

2.  Install Dependencies

For backend:

    cd server
    npm install

For frontend:

    cd ../client
    npm install

3.  Setup Environment Variables
   In the indproTaskManager (root) folder, create a .env file:

    PORT=5000
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key

4.  Start the App

Start backend in Terminal 1:
    cd server
    npm run dev

Start frontend in Terminal 2:
    cd ../client
    npm run dev

Your app should now be running at http://localhost:5173

# For testing purpose :
    username : testuser
    email : testuser@xyz.com
    password : testuser@xyz

# Tech Stack
Frontend: React.js, Tailwind CSS, React Context API

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT + Cookies

Miscellaneous: Vite, React Hot Toast

# Author
Om Shankar — 
https://www.linkedin.com/in/omshankar2k11/

