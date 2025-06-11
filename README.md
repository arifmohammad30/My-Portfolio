# MY-PORTFOLIO
A fullstack portfolio web application built with **React (Vite, TypeScript, Tailwind CSS)** on the frontend and **Node.js/Express** on the backend. This portfolio showcases projects, skills, and includes a working contact form that sends emails via an API.

# Live Demo
Frontend: https://arifmohdportfolio.netlify.app/
Backend: https://my-portfolio-backend-q9yh.onrender.com/

# Features
- Modern, responsive UI built with Tailwind CSS and Framer Motion
- Animated, clean sections for projects, skills, and contact
- Contact form with email delivery via Nodemailer
- Environment-based configuration for API integration
- Deployed on Netlify (frontend) and Render (backend)
-
- # Tech Stack

# Frontend
- React(with Vite)
- TypeScript
- Tailwind CSS
- Radix UI
- Wouter (for routing)
- Framer Motion
# Backend
- Node.js
- Express
- TypeScript
- Nodemailer (for sending emails)
- CORS
- dotenv

# Project Structure

# ArifPortfolio/
  frontend/   # React app (Vite)
  backend/    # Node.js/Express API

# Setup
#  Backend
Go to backend/
Install dependencies:
   npm install

Create a .env file with:

     SMTP_HOST=your_smtp_host
     SMTP_PORT=587
     EMAIL_USER=your_email
     EMAIL_PASS=your_password
     EMAIL_RECEIVER=receiver_email
     PORT=5000 (or) any port you want 
   
Start the backend:
   npm run dev

The backend runs on : http://localhost:5000

# Frontend
Go to frontend/

Install dependencies:
   npm install
  
Create a .env.production file with:
   VITE_API_BASE_URL=https://my-portfolio-backend-q9yh.onrender.com  (This is used for deployment)

Start the frontend (for local dev):
 npm run dev

The frontend runs on http://localhost:3000

# Deployment
# Backend (Render)
  Push backend/ to GitHub.
  Create a new Web Service on Render.
  Set build command: npm install && npm run build
  Set start command: npm start
  Add all required environment variables in the Render dashboard.
  
# Frontend (Netlify)
  Push frontend/ to GitHub.
  Create a new site on Netlify.
  Set build command: npm run build
  Set publish directory: dist
  Add environment variable VITE_API_BASE_URL with your Render backend URL (or use .env.production).

# Scripts
# Frontend
  npm run dev – Start dev server
  npm run build – Build for production
  npm run preview – Preview production build
# Backend
  npm run dev – Start backend in dev mode
  npm run build – Compile TypeScript
  npm start – Start backend from compiled JS

  

# License
# This project is licensed under the MIT License.

  
