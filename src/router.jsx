import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage';
import CheckoutPage from './components/checkoutpage';
import Receipt from './components/receipt';
import CartIcon from './components/carticon';
import ProductCard from './components/productcard';

// export const router = createBrowserRouter([
//   {
//       path:"/",
//       element: <LandingPage/>
//   },
//   {
//       path:"/checkoutpage",
//       element: <CheckoutPage/>
//   },
//   {
//       path:"/receipt",
//       element: <Receipt/>
//   },
//   {
//       path:"/productCard",
//       element:<ProductCard/>
//   },
//   {
//       path:"/carticon",
//       element:<CartIcon/>
//   }
// ])

export const Routers = () => {
  return (
    <Router>
      <div className="App">
        <CartIcon />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/receipt" element={<Receipt />} />
          <Route path="/carticon" element={<CartIcon />} />
          <Route path="/productCard" element={<ProductCard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routers;
