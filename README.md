# Survey / Feedback Application

A full-stack web application that allows users to create surveys, participate in surveys, and view survey analytics through charts.

---

## Live Application

Frontend (Netlify):  
https://survey-feedback-app.netlify.app/

Backend API (Render):  
https://survey-feedback-app.onrender.com

---

## Tech Stack

Frontend:
- React (Vite)
- Bootstrap
- Axios
- Chart.js

Backend:
- Node.js
- Express.js
- JWT Authentication

Database:
- MongoDB (MongoDB Atlas)

---

## Features

- User registration and login using JWT
- Protected routes for authenticated users
- Create surveys with multiple-choice questions
- Add multiple questions with custom options
- View all available surveys
- Fill surveys and submit responses
- View total responses per survey
- Visualize survey results using bar charts
- Logout functionality

---

## Project Structure

survey-feedback-app/
├── client/   (React frontend)
├── server/   (Node.js backend)
└── README.md

---

## Run Locally

Backend setup:
cd server
npm install

Create .env file in server directory:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Start backend:
node server.js

Backend runs on:
http://localhost:5000

---

Frontend setup:
cd client
npm install
npm run dev

Frontend runs on:
http://localhost:5173

---

## API Endpoints

Authentication:
- POST /api/auth/register
- POST /api/auth/login

Surveys:
- POST /api/surveys
- GET /api/surveys

Responses:
- POST /api/responses
- GET /api/responses/:surveyId

---

## Deployment

- Frontend deployed on Netlify
- Backend deployed on Render
- MongoDB Atlas used for cloud database storage

---

## Author

Karthikeyan S
