# IntelliSQR-Assignment




## Objective

This project implements a full-stack application based on a provided Figma design. The frontend is built with React and JavaScript, while the backend uses Node.js and Mongoose for database management.

## Frontend (`/frontend`)

### Setup Instructions

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    
    ```
3.  **Create a `.env.local` file** in the frontend directory and add the following environment variable:
    ```
    REACT_APP_API_BASE_URL= http://localhost:5173/
    ```

### Running the Frontend Locally

1.  **Navigate to the frontend directory:**
    ```bash
    cd frontend
    ```
2.  **Start the development server:**
    ```bash
    npm start
    
    ```
3.  Open your browser and navigate to ` http://localhost:5173/ `.

### Tech Stack

* **React:** JavaScript library for building user interfaces.
* **JavaScript:** Primary programming language.
* **Zod:** For schema validation.
* **React Hook Form:** For form management and validation.
* **React Query:** For data fetching, caching, and state management.
* **Axios** (or Fetch API): For making HTTP requests.


### Project Structure

├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── public/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── HomePage.jsx
    │   │   ├── Login.jsx
    │   │   ├── NavBar.jsx
    │   │   └── SignUp.jsx
    │   ├── App.css
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── vite.config.js


### Form Management and Validation

`React Hook Form` is used for efficient form management, and `Zod` is integrated for robust client-side data validation before submitting to the backend.

### Data Fetching and State Management

`React Query` is used to simplify data fetching, caching, and updating state related to server data. It handles loading states, error handling, and background updates.

### Error Handling

The frontend implements error handling at various levels:

* **Form Validation:** `React Hook Form` and `Zod` provide client-side validation feedback.
* **API Error Handling:** When API requests fail, appropriate error messages are displayed to the user. This includes handling different error statuses and providing user-friendly feedback.

## Backend (`/backend`)

### Setup Instructions

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Create a `.env` file** in the backend directory and add the following environment variable:
    ```
    MONGODB_URI=your_mongodb_connection_string
    PORT=5000 # Or your desired port
    ```
    Replace `your_mongodb_connection_string` with your actual MongoDB connection string.

### Running the Backend Locally

1.  **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2.  **Start the development server:**
    ```bash
    npm start
    ```
3.  The backend server will start running on `http://localhost:5000` 

### Tech Stack

* **Node.js:** JavaScript runtime environment for the server-side.
* **JavaScript:** Primary programming language.
* **Express.js:** Minimalist web application framework for Node.js.
* **Mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.
* **body-parser:** Middleware to parse incoming request bodies.
* **cors:** Middleware to enable Cross-Origin Resource Sharing (CORS).

### Mongoose Schema

The backend uses Mongoose to interact with the MongoDB database. The `models` directory contains the schema definition for the `User` model

Controllers
Controllers in the controllers directory handle the business logic for each API endpoint. They interact with the Mongoose models to perform database operations and send responses.

Routes
The routes directory defines the API endpoints using Express.js. These routes map incoming requests to the corresponding controller functions.

Error Handling
The backend implements robust error handling:

Mongoose Validation Errors: Mongoose handles validation based on the schema definitions.

Custom Error Handling: Error handling middleware or try-catch blocks in controllers are used to catch and handle errors gracefully, providing informative error responses to the frontend. This might include specific error codes and messages.





