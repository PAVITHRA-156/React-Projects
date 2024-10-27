import React from 'react';
import './signup.css'; // Assuming you have a separate CSS file for Signup page styling
import { Button, TextField, Checkbox, FormControlLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();
  const nav=useNavigate();
  const Lo=()=>{
    nav('/login')
  }

  const handleSignup = (event) => {
    event.preventDefault();
    // Add signup logic here (e.g., form validation, API request)
    console.log('User signed up successfully!');
    // After successful signup, navigate to login or another page
    navigate('/');
  };

  return (
    <div className='con1'>
    <div className='wrapper'>
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <div className='input-box'>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className='input-box'>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className='input-box'>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className='input-box'>
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
          />
        </div>
        <div className='terms-and-conditions'>
          <FormControlLabel
            control={<Checkbox name="terms" required />}
            label="I agree to the terms and conditions"
          />
        </div>
        <Button type="submit" variant='contained' color="primary" onClick={Lo}>Sign Up</Button>
        <div className='login-link'>
          <p>Already have an account? <a href="/" onClick={() => navigate('/')}>Login</a></p>
        </div>
      </form>
    </div>
    </div>
  );
};

export default SignupForm;