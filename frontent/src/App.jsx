import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <Router> 
      <NavBar />
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
