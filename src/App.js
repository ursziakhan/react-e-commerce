import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store';
import Shop from './Shop';
import About from './About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Error from './components/Error';
import Home from './Home';
import Header from './components/Header';
import SingleProductPage from './components/SingleProductPage';

let isInitial = true;
function App() {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendCartData(cartState))
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
