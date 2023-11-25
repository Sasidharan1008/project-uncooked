import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png"
import styles from  "./Navebar.module.css";
import { CartContext } from '../assets/CartContext';
import { useContext } from 'react';



function Navebar() {
  
  const { cartItems } = useContext(CartContext);

  
  return (
    <div className={styles.containe}>
        <div className={styles.logo_container}>
        <img src={Logo} />
        </div>
        
        
        <div className={styles.links_container_l}>
            <Link className={styles.links} to="/project-uncooked">Home</Link>
            <Link className={styles.links} to="/menu">Menu</Link>
            <div className={styles.cartlogo}>
            <Link className={styles.links} to="/cart">Cart</Link>
            <div className={styles.icon}>{cartItems.length}</div>
            </div>
            <Link className={styles.links} to="/login">Login</Link>
        </div>
    </div>
  )
}

export default Navebar