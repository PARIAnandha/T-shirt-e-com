import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './component/login/index'; // Adjust the path according to your folder structure
import Signup from './component/signup/index'; 
import ForgetPassword from './component/forgetpassword/index';
import Home from './component/dashboard/home'; 
import ProtectedRoute from './routes/protectedRoute'; // Import the ProtectedRoute component
import AdminProduct from './admin';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        {/* Protected Routes */}
        <Route 
          path="/home" 
          element={<ProtectedRoute element={<Home />} />} 
        />
         <Route 
          path="/admin" 
          element={<ProtectedRoute element={<AdminProduct />} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
