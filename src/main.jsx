import React from 'react'
import  StrictMode from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CartProvider from './context/cartcontext.jsx';


export const element = <FontAwesomeIcon icon="fas fa-shopping-cart" />

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<<<<<<< HEAD
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>,
);
=======
    <App />
  </React.StrictMode>,
);
  
>>>>>>> 6efed9bcbcf05df564bf61d4fc481cbe11dd3663
