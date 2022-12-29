import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Login/Signin.jsx";
import Signup from "./components/SignUp/Signup.jsx";
import Dashboard from "./pages/Dashboard/dashboard";
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Signin/>} />
              <Route path="/Signup" element={<Signup/>} />
              <Route path='/Dashboard' element={
                <ProtectedRoute>
                    <Dashboard />
                </ProtectedRoute>
            } />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;