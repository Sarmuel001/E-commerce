import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


export const element = <FontAwesomeIcon icon="fas fa-shopping-cart" />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
