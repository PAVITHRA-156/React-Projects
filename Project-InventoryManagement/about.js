import { Typography } from "@mui/material";
import React from "react";
import './about.css';
import { useNavigate } from "react-router-dom";

function About() {
    const anav=useNavigate();
    const aClick=()=>{
        anav('/sam');
    }
    return (
        <div className="ab">
           
            <div className="about-container">
            <a href="#back" onClick={aClick}>BACK</a>
                <div className="image-container">
                  
                    <img src="https://t3.ftcdn.net/jpg/01/28/44/76/360_F_128447604_6deYSrg6bgH2F3YaoU0icdhvxNu4ReDN.jpg" className="imgabout" alt="about-img" />
                    
                    <img src="https://img.freepik.com/premium-photo/male-inventory-manager-using-laptop-computer-store-generative-ai_868783-4667.jpg" className="imgabout1" alt="inventory-img" />
                </div>

                {/* Content container on the right */}
                <div className="content-container">
                    <Typography variant="h4">
                        About Us
                    </Typography>
                    <br /><br />
                    <Typography variant="h5">Welcome to our Inventory Management System!</Typography>
                    <br />
                    <p>
                        Our application is designed to streamline and simplify the process of managing inventory for businesses of all sizes. Whether you're tracking products, monitoring stock levels, or managing suppliers, our system provides a powerful and intuitive platform to ensure your inventory operations run smoothly.
                    </p>
                    <h4>Key Features:</h4>
                    <ul>
                        <li>Real-time inventory tracking</li>
                        <li>Automated stock alerts</li>
                        <li>Comprehensive reporting tools</li>
                        <li>User-friendly interface</li>
                    </ul>
                    <br />
                    <p>
                        Our mission is to empower businesses with the tools they need to stay organized, reduce losses, and make smarter decisions when it comes to managing their inventory. We are committed to providing excellent customer support and continuously enhancing our system with the latest features and improvements.
                    </p>
                    <br />
                    <p>Thank you for choosing our Inventory Management System to meet your needs!</p>
                </div>
            </div>
        </div>
    );
}

export default About;
