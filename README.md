# Survey / Feedback Application

This is a full stack Survey / Feedback web application built as part of the
Full Stack Developer Internship assignment for Dotworld Technologies Pvt Ltd.

The application allows users to create surveys, participate in surveys,
and view survey results in the form of charts.

------------------------------------------------------------

TECH STACK

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

------------------------------------------------------------

FEATURES

Authentication:
- User login using JWT
- Protected dashboard access
- Logout functionality

Survey Management:
- Create surveys with multiple questions and options
- View available surveys
- Fill surveys and submit responses

Analytics:
- View total responses for each survey
- Visualize survey results using bar charts

------------------------------------------------------------

PROJECT STRUCTURE

survey-feedback-app/
|
|-- client/        (Frontend - React)
|-- server/        (Backend - Node + Express)
|-- README.md

------------------------------------------------------------

HOW TO RUN THE PROJECT LOCALLY

1) Clone the repository

git clone https://github.com/KARTHIKEYAN0807/survey-feedback-app.git


2) Backend Setup

cd server
npm install

Create a .env file inside the server folder with the following content:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Run the backend server:

node server.js

Backend will run on:
http://localhost:5000

------------------------------------------------------------

3) Frontend Setup

cd client
npm install
npm run dev

Frontend will run on:
http://localhost:5173

------------------------------------------------------------

API ENDPOINTS

Authentication:
- POST /api/auth/register
- POST /api/auth/login

Surveys:
- POST /api/surveys
- GET /api/surveys

Responses:
- POST /api/responses
- GET /api/responses/:surveyId

------------------------------------------------------------

NOTES

- This project was built manually without using AI code generation tools.
- All functionality and logic were implemented as part of the assignment.
- MongoDB Atlas is used for cloud database storage.

------------------------------------------------------------

AUTHOR

Karthikeyan S
