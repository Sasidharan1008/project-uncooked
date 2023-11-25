import './App.css';
import Navebar from "./components/Navebar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Cart from "./pages/cart/Cart";
import SignLog from './pages/login/SignLog';
import React, { useState } from 'react';
import { Products } from './assets/products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartContext } from './assets/CartContext';

function App() {
  const [ cartItems , setCartItems ] = React.useState([]);

  const [price,setPrice] = useState(0);


  return (
    <CartContext.Provider value={{cartItems,setCartItems,price,setPrice,Products}}>
      <div className="App">
        <Router >
          <Navebar />
          <Routes>
            <Route path='/project-uncooked' exact element={<><Home /> <Footer /> </>} />
            <Route path='/menu' exact element={<><Menu /> <Footer /></>} />
            <Route path='/cart' exact element={<><Cart /> <Footer /></>} />
            <Route path='/login' exact element={<SignLog />} />
          </Routes> 
        </Router>        
      </div>
    </CartContext.Provider>
  );
}

export default App;
