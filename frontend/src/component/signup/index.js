import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputAdornment, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., make an API call)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container maxWidth="xs" sx={{ padding: '3rem', backgroundColor: '#fafafa', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#00796b' }}>
        Sign Up
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: '#00796b' }} />
              </InputAdornment>
            ),
          }}
          sx={{ marginBottom: '1rem' }}
        />

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
          type="password"
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
          Sign Up
        </Button>

        {/* Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
          <Link to="/forgetpassword" style={{ color: '#00796b', textDecoration: 'none', fontWeight: '600' }}>
            Forgot Password?
          </Link>
          <Link to="/" style={{ color: '#00796b', textDecoration: 'none', fontWeight: '600' }}>
            Login
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default Signup;
