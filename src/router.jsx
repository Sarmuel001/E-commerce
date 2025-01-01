import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import CheckoutPage from './components/checkoutpage';
import Receipt from './components/receipt';
import CartIcon from './components/carticon';

export const AppRouter = () => {
  return (
    <Router>
      <div className="App">
        <CartIcon />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/receipt" element={<Receipt />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;