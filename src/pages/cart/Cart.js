import React from 'react';
import { CartContext } from '../../assets/CartContext';
import { useContext } from 'react';
import styles from "./Cart.module.css";
import { Link } from 'react-router-dom';


function Cart() {
  const { cartItems, setCartItems, setPrice } = useContext(CartContext);

  

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += item.count * item.price;
    });
    return totalPrice;
  };

  const deleteItem = (val) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item !== val));
    setPrice(prevPrice => prevPrice - val.count * val.price);
  };

  const countInc = (ele, n) => {
    if (n >= 1){
    const newCount = parseInt(n, 10);
    if (!isNaN(newCount)) {
      setCartItems(prevCartItems => {
        const updatedItems = prevCartItems.map(item => {
          if (item === ele) {
            return { ...item, count: newCount };
          }
          return item;
        });
        return updatedItems;
      });
      setPrice(calculateTotalPrice());
    }
  }
  };

  return (
    <div className={styles.mainCart}>
      <div className={styles.cartpage}>
      {cartItems.length > 0 ? <>
      <h1 className={styles.head}> Your Cart Items</h1>
        {cartItems.map(item => 
          <div className={styles.cartItem} key={item.id}>
            <div className={styles.cartImg}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.cartDetails}>
              <h3>{item.name}</h3>
              <p>Price - {item.price}</p>
            </div>
            <div className={styles.cartBtn}>
              <input type="number" value={item.count < 2 ? 1 : item.count} onChange={(e) => countInc(item, e.target.value)} />
              <button onClick={() => deleteItem(item)}>Delete</button>
            </div>
          </div>
        )}
         <p className={styles.total}>Total - {calculateTotalPrice()}</p> 
         </>
         : <h1 className={styles.empty}>Your Cart is Empty !!!!</h1>}
        <div>
          <Link to="/menu" className={styles.con}>Continue Shopping</Link>
          <button className={styles.place}>Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
