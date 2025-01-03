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
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cartcontext';
import { Routers } from './router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartIcon from './components/carticon';



const App = () => { 
  return (
        <CartProvider>
             <span><a href="/" style={{textDecoration:'none'}}><h1 style={{position:'sticky', color:'white', backgroundColor:'#28a745', paddingLeft:'20px',margin:'0px', width:'100vw'}}>CapacityBay Store</h1></a></span>  
              {/* <CartIcon/> */}
                 <br/><br/> <br/>
             <ToastContainer />
              <Routers/>
             
              <footer>
               <h5 style={{width:'100%', height:'3%',      position:'sticky',textAlign:'center', padding:'5px', backgroundColor:'#28a745', color:'white'}}>Designed by: Sam Adebayo</h5>      </footer>
    </CartProvider>

  );
};

 export default App;