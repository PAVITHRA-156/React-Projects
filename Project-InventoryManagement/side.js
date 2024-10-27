import React from 'react';
import {Pie,Bar} from 'react-chartjs-2'
import './hp.css';
import { useNavigate } from 'react-router-dom';

import pav from './images/admin.avif'
import { Typography } from '@mui/material';

function Side() {
  const nav=useNavigate();
  const nav1=useNavigate();
  const Get=()=>{
    nav1('/product');
  }
 
  const Man=()=>
  {
   nav("/manage");   
  }

  const Hom=()=>{
    nav("/homee");
  }
  const nav3=useNavigate();
  const Click = () => {
    nav3("/manage");
  }
  const usenav = useNavigate()
  const uClick=()=>{
    usenav("/clients");
  }
  const repnav=useNavigate()
  const repClick=()=>{
    repnav("/report");
  }
    const sernav=useNavigate()
    const serClick=()=>{
      sernav("/service");
    
  }
  const connav=useNavigate();
  const conClick=()=>{
    connav("/contact");
  }
  return (
    <div className="container">
  
      <div className="sidebar">
        <Typography variant='h4' style={{marginLeft:'50px'}}>IMS</Typography>
        <img src={pav} className='img'></img>
       <Typography variant='h6' style={{marginLeft:'50px'}}>Admin</Typography>
        <ul>
          <li><a href="#homee" onClick={Hom}>Home</a></li>
          <li><a href="#services" onClick={serClick}>Services</a></li>
          <li><a href="#clients" onClick={uClick}>Clients</a></li>
          <li><a href="#contact" onClick={conClick}>Contact</a></li>
          <li><a href='#Report' onClick={repClick}>Report</a></li>
          <li><a href="#Add Products" onClick={Man}>Add Products</a></li>
        </ul>
      </div>
 
     
      </div>
    
  );
}

export default Side;
