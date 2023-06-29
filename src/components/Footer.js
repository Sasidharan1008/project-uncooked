import React from 'react';
import styles from "./Footer.module.css";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.jpg";
import twi from "../assets/twitter.png";

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer>
        <nav>
            <h5>Useful Information</h5>
            <Link to="/uncooked-kitchen" >Home</Link><br></br>
            <a href="/cart.html">Your Account</a><br/>
            <a href="/about.html">About Us</a><br/>
            <a href="/cart.html">FAQs</a><br/>
        </nav>     
        <nav>
            <h5>Others</h5> 
            <a href="/cart.html">Privacy Policy</a><br/>
            <a href="/contact.html">Talk to Us</a><br/>
            <a href="/table.html">Branches</a><br/>
        </nav>     
        <nav>
            <h5>Contact Information</h5>
            <p>Email :Uncooked@gmail.com</p>
            <p>Phone Number : 9876543210</p>
            <p>Branches : <a href="/table.html">Click Here to Know More</a></p>
            <p>Working Hours : 8 AM - 11 PM</p>
        </nav>
        <nav>
            <h5>Social Media Handles</h5>
            <a href="https://www.instagram.com" target="_blank"><img id="fb" src={insta} width="40px" /></a>
            <a href="https://www.facebook.com" target="_blank"><img id="fb" src={facebook} width="40px"/></a>
            <a href="https://www.twitter.com" target="_blank"><img id="fb" src={twi} width="40px"/></a>
        </nav>
    </footer>
    <div className={styles.lic}>Uncooked © 2020 All Rights Reserved</div>       
    </>
  )
}

export default Footer