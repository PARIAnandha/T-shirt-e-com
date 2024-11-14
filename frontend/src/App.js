import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import React Router components
import Login from './component/login/index'; // Adjust the path according to your folder structure
import Signup from './component/signup/index'; // Add Signup component
import ForgetPassword from './component/forgetpassword/index'; // Add ForgetPassword component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Login page as default */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        <Route path="/forgetpassword" element={<ForgetPassword />} /> {/* Forgot password page */}
      </Routes>
    </Router>
  );
};

export default App;
