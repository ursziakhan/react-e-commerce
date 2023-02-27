import Shop from './Shop';
import About from './About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import Home from './Home';
import React from 'react';
import SingleProductPage from './components/SingleProductPage';
import { sendCartData, fetchCartData } from './utlis/dataToFirebase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header';

function App() {
  const cartState = useSelector((state) => state.cart);
  useEffect(() => {
    sendCartData(cartState);
  }, [cartState]);
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/:id" element={<SingleProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
