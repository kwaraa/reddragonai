# RedDragonAI - Full Stack Application 🚀

Welcome to **RedDragonAI**, a full-stack application built with **React (Frontend) & FastAPI (Backend)**. This guide will help you set up and run the project using **Docker**.

---

## 📂 **Project Structure**  
📁 reddragonai-backend/ # FastAPI Backend   
├── main.py # FastAPI API logic  
├── requirements.txt # Backend dependencies   
├── Dockerfile # Docker config for backend   

📁 reddragonai-frontend/ # React Frontend   
├── src/ # React source code   
├── package.json # Frontend dependencies   
├── Dockerfile # Docker config for frontend  

📄 docker-compose.yml # Runs both frontend & backend in Docker   
📄 README.md # Project documentation  

---  

## 🛠 **Prerequisites**  
Before running the project, ensure you have the following installed:  

✅ **Docker** → [Install Docker](https://www.docker.com/get-started)  
✅ **Docker Compose** (included in Docker Desktop)

---

## 🚀 **How to Run the Project**  
### 1️⃣ **Clone the Repository**  
git clone <your-repository-url>   
cd <your-project-folder>  

### 2️⃣ Run the Application with Docker  
  
docker-compose up --build  
  
This will:  
Build & start the backend (FastAPI)  
Build & start the frontend (React)  
Run everything inside Docker containers  

### 3️⃣ Verify Everything is Running  
Frontend: Open 🌐 http://localhost:3000  
Backend API Docs: Open 🌐 http://localhost:8000/docs  
  
### 4️⃣ Stop the Application  
To stop all containers:  
docker-compose down  
To run in the background (detached mode):  
docker-compose up -d  
  
### 5️⃣ Rebuilding After Code Changes  
If you make changes to the backend or frontend:  
docker-compose down  
docker-compose up --build  
🎯 Testing the Backend API  
You can test the FastAPI backend using cURL or Postman:  
curl -X POST "http://localhost:8000/generate/" \  
     -H "Content-Type: application/json" \  
     -d '{"prompt": "Hello AI"}'  
Expected response:  
{
  "generated_text": "Hello AI, welcome to the world of RedDragonAI!"
}

---  

### 🎨 Technologies Used  
  
✅ Frontend: React + Material UI  
✅ Backend: FastAPI + Transformers  
✅ Containerization: Docker & Docker Compose  
  
---  
  
### ❓ Troubleshooting  
🔹 Backend Fails to Start?  
docker-compose logs backend  
Check if main.py exists in reddragonai-backend/.  

### 🔹 Frontend Can't Connect to Backend?  
Ensure API URL in reddragonai-frontend/src/App.tsx:  
const API_URL = "http://backend:8000/generate/";  
