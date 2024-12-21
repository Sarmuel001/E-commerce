import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const element = <FontAwesomeIcon icon="fas fa-shopping-cart" />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
