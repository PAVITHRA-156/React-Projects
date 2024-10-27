// src/App.js
import React from 'react';
import im from './images/man.png';
import './sam.css'; 
import { AppBar, Toolbar, Typography, Button, Container, Box, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Appp = () => {
  const nav=useNavigate();
  const Login=()=>{
    nav('/login')
  }
  const conC=()=>{
    nav('/Cont');
  }
  const nav1=useNavigate();
  const Get=()=>{
    nav1('/homee');
  }
  const s=useNavigate();
  const sign=()=>{
      s('/signup');
  }
  const anav=useNavigate();
  const aC=()=>
  {
    anav('/about');
  }
  const f=useNavigate();
  const fC=()=>{
    f('/features');
  }
  return (
    <div className="app-container">
     
      <AppBar position="static" className="app-bar">
        <Toolbar>
          <Typography variant="h6" className="logo">
            YourLogo
          </Typography>
          <div className="nav-links">
            <Button color="inherit">Home</Button>
            <Button color="inherit" onClick={aC}>About</Button>
            <Button color="inherit" onClick={fC}>Features</Button>
            <Button color="inherit" onClick={Login}>Login</Button>
            <Button color="inherit" onClick={conC}>Contact</Button>
            <Button color="inherit" onClick={sign}>Sign In</Button>
          </div>
        </Toolbar>
      </AppBar>

     
      <Container maxWidth="lg" className="hero-container">
        <Grid container spacing={4}>
         
          <Grid item xs={12} md={6}>
            <Typography variant="h2" className="hero-title">
              Inventory 
            </Typography>
            <Typography variant="body1" className="hero-description">
            Managing your inventory has never been easier! With Inventory, you get a complete, streamlined solution designed to help you track, manage, and optimize your inventory in real time. Say goodbye to guesswork and manual tracking and hello to seamless operations and efficient stock management.
            </Typography>
            <Button variant="contained" className="primary-button" onClick={Get}>
              Get Started
            </Button>
            {/* <Button variant="outlined" className="secondary-button">
              View demo
            </Button> */}
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Box display="flex" justifyContent="center">
             
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Appp;
