import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Navbar, Products, Cart , About ,Home} from './components';
import { commerce } from './lib/commerce';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    console.log('added');
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  useEffect(() => {
    // fetchProducts();
    // fetchCart();
  }, []);


  return (
    <Router>
      <Navbar totalItems={cart.total_items}  />
      <div style={{ display: 'flex' }}>
        <Routes>
          <Route exact path="/" element={<Home onAddToCart={handleAddToCart} handleUpdateCartQty />} />
          <Route exact path="/cart" element={ <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} /> } />
          <Route exact path="/about" element={ <About/> } />
          <Route exact path="/products" element={ <Products onAddToCart={handleAddToCart} handleUpdateCartQty /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;