import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputAdornment, IconButton, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., make an API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Container maxWidth="xs" sx={{ padding: '3rem', backgroundColor: '#fafafa', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#00796b' }}>
        Welcome Back!
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#00796b' }} />
              </InputAdornment>
            ),
          }}
          sx={{ marginBottom: '1rem' }}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#00796b' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOffIcon sx={{ color: '#00796b' }} /> : <VisibilityIcon sx={{ color: '#00796b' }} />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ marginBottom: '1.5rem' }}
        />

        <Button
          type="submit"
          variant="contained"
          color="success"
          fullWidth
          sx={{
            padding: '12px',
            backgroundColor: '#00796b',
            '&:hover': { backgroundColor: '#004d40' },
            fontSize: '1rem',
            fontWeight: '600',
          }}
        >
          Login
        </Button>

        {/* Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
          <Link to="/forgetpassword" style={{ color: '#00796b', textDecoration: 'none', fontWeight: '600' }}>
            Forgot Password?
          </Link>
          <Link to="/signup" style={{ color: '#00796b', textDecoration: 'none', fontWeight: '600' }}>
            Sign Up
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
