import React, { useEffect, useState } from 'react'
import AppLayout from '../Layout'
import Header from '../Layout/header/header'


const Errorpage = ()=> {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div>
      <Header/>
      
        <div style={{lineHeight:'1px', textAlign:"center", fontSize:'100%', width:'100%'}}>
      <h3>Oops something went wrong</h3>
      <h6>Error 404 Page not found</h6>
      <p>{currentDateTime.toLocaleString()}</p>
      <br />
      <p>
      <a href="/" style={{textDecoration:'none', color:'#218838'}}>Return Home</a>
      </p>
      </div>
      
      </div>

  )
}

export default Errorpage


// import React, { useEffect, useState } from 'react';
// import Select from 'react-select';

// const Errorpage = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [countryCode, setCountryCode] = useState('');
//   const [validationResult, setValidationResult] = useState(null);
//   const [error, setError] = useState(null);

//   const validatePhoneNumber = async () => {
//     try {
//       const accessKey = '607919ed13029c0e5f53e97fcfaa4110'; // Replace with your actual access key
//       const apiUrl = `http://apilayer.net/api/validate?access_key=${accessKey}&number=${phoneNumber}&country_code=${countryCode}&format=1`;

//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error('Failed to validate phone number');
//       }

//       const data = await response.json();
//       if (data.success === false) {
//         throw new Error(data.error.info || 'Validation failed');
//       }

//       setValidationResult(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(null);
//     setValidationResult(null);
//     validatePhoneNumber();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             placeholder="Enter phone number"
//           />
//         </div>
//         <div>
//           <label>Country Code (Optional):</label>
//           <input
//             type="text"
//             value={countryCode}
//             onChange={(e) => setCountryCode(e.target.value)}
//             placeholder="e.g., US, NG"
//           />
//         </div>
//         <button type="submit">Validate</button>
//       </form>

//       {error && <div style={{ color: 'red' }}>Error: {error}</div>}

//       {validationResult && (
//         <div>
//           <h3>Validation Result:</h3>
//           <p>Valid: {validationResult.valid ? 'Yes' : 'No'}</p>
//           <p>Number: {validationResult.international_format}</p>
//           <p>Country: {validationResult.country_name}</p>
//           <p>Carrier: {validationResult.carrier}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Errorpage
