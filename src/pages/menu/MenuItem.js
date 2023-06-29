import React from 'react';
import styles from "./Menu.module.css";
import { useContext } from 'react';
import { CartContext } from '../../assets/CartContext';

function MenuItem({products}) {

  const {cartItems,setCartItems,price,setPrice} = useContext(CartContext);

  const addItems = (val) => {
    // Check if the item already exists in the cartItems array
    const itemExists = cartItems.some(item => item.name === val.name);
  
    if (!itemExists) {
      // Item does not exist, so add it to the cartItems array
      setCartItems([...cartItems, val]);
      setPrice(price + val.price);
    }
  }
      
  return (
    <>
    {products.map(product => (
        <div className={styles.card}>
            <div className={styles.imagecon}>
                <img src={product.image} />
                { cartItems.some(item => item.name === product.name) && (
                  <p className={styles.cartplace}>Cart</p>)}
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{product.name}</p>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={styles.pricediv}>
                  <p className={styles.price}>Price - ₹ {product.price}</p>
                  <button className={styles.add} onClick={() => addItems(product)}>Add to Cart</button>
                </div>
            </div>
        </div>
    ))}
    </>
  )
}

export default MenuItem