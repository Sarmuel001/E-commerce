// import React from 'react';
// import { CartProvider } from './context/cartcontext';
// import LandingPage from './components/Landingpage';
// import carticon from './components/carticon';
// import CheckoutPage from './components/checkoutpage';
// import CartIcon from './components/carticon';

// const App = () => {
//   return (
//     <CartProvider>
//       <div className="App">
//         <CartIcon />
//         <LandingPage/>
//         <CheckoutPage />
//       </div>
// </CartProvider>
// )}    
//   export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { CartProvider } from './context/cartcontext';
// import LandingPage from './components/Landingpage';
// import CartIcon from './components/carticon';
// import CheckoutPage from './components/checkoutpage';


// const App = () => {
  //   return (
//     <CartProvider>
//       <Router>
//         <div className="App">
//           <CartIcon />
//           <Routes>
//             <Route path="/" element={<LandingPage />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             <Route path="/receipt" element={<Receipt />} />
//           </Routes>
//         </div>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;

import React from 'react'; 
import { createBrowserRouter, Router } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cartcontext';
import { router } from './router';
import CartIcon from './components/carticon';



const App = () => { 
  return (
    < RouterProvider router={router}/>
  );
};

 export default App;