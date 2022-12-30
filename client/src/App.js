import React, { useState } from "react";
import './App.css';
import {SignUp} from './components/signup/register';
import {Login} from './components/login/login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/dashboard";
import ProtectedRoute from './utils/ProtectedRoute';

function App() {

  return (
    <Router>
    <div className="App">
    <Routes>
    <Route exact path="/" element={<Login/>} />
    <Route path="/SignUp" element={<SignUp/>} />
     <Route path='/Dashboard' element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
