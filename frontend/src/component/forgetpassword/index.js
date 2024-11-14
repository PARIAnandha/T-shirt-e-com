import React, { useState } from 'react';
import { TextField, Button, Typography, Container, InputAdornment, Box } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here (e.g., make an API call)
    console.log('Email:', email);
  };

  return (
    <Container maxWidth="xs" sx={{ padding: '3rem', backgroundColor: '#fafafa', borderRadius: '8px', boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', color: '#00796b' }}>
        Forgot Password
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
          Reset Password
        </Button>

        {/* Links */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem' }}>
          <Link to="/" style={{ color: '#00796b', textDecoration: 'none', fontWeight: '600' }}>
            Back to Login
          </Link>
        </Box>
      </form>
    </Container>
  );
};

export default ForgetPassword;
