import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/Landingpage/index';
import CheckoutPage from './components/checkoutpage/index';
import Receipt from './components/receipt/index';
import CartIcon from './components/carticon/index';
import ProductCard from './components/productcard/index';
import Errorpage from './error';

export const router = createBrowserRouter([
  {
      path:"/",
      element: <LandingPage/>
  },
  {
      path:"/checkoutpage",
      element: <CheckoutPage/>
  },
  {
      path:"/receipt",
      element: <Receipt/>
  },
  {
      path:"/productCard",
      element:<ProductCard/>
  },
  {
      path:"/carticon",
      element:<CartIcon/>
  },
  {
    path:"*",
    element:<Errorpage/>
}
])

// export const Routers = () => {
//   return (
//     <Router>
//       <div className="App">
//         <CartIcon />
//         <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/checkout" element={<CheckoutPage />} />
//           <Route path="/receipt" element={<Receipt />} />
//           <Route path="/carticon" element={<CartIcon />} />
//           <Route path="/productCard" element={<ProductCard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Routers;
