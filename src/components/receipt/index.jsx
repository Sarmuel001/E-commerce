import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, total, transactionId, date } = location.state;

  return (
    <div className="receipt">
      <h2 style={{color:'#28a745'}}>CapacityBay Store</h2>
      <h6 style={{marginTop:'-14px', backgroundColor:'#28a745', width:'150px', color:'white', borderRadius:'3px', margin:'0 auto', padding:'3px'}}>The best online seller</h6>
      <h2>Payment Receipt</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>${item.price} x {item.quantity}</p>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
      <p>Transaction ID: {transactionId}</p>
      <p>Date: {date}</p>
      <button onClick={() => window.print()}>Print Receipt</button> 
      <button onClick={() => navigate('/')}>Back to Shopping</button>
    </div>
  );
};

export default Receipt;
