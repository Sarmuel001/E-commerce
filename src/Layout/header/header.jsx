import { Link } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import CartIcon from '../../components/carticon';



export function Header  () {
  const [searchByTitle,setSearchByTitle] = useState(null);
  const[mode,setMode] = useState("light");
  //FUNCTION TO PERFORM MODE OPERATION
   useEffect(()=>{
    const savedMode = localStorage.getItem("mode") || "light";
    setMode(savedMode);
    document.documentElement.setAttribute("data-mode",savedMode)
   },[])
  
  
   const toggleMode = ()=>{
     const newMode = mode === "light" ? "dark" : "light";
     setMode(newMode);
     localStorage.setItem('mode',newMode)
     document.documentElement.setAttribute("data-mode",newMode)
   }
     // CSS styles using JavaScript objects
     const styles = {
      button: {
        height:'25px',
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "white",
        color: "green",
        border: "none",
        borderRadius: "5px",
        transition: "background-color 0.3s ease, color 0.3s ease",
      },
    };
  
  return (
    <div>
<header id='header'>
        {/* style={{
          width:"100%",
          height:"3rem",
          backgroundColor:'#28a745',
          display:"flex",
          flexDirection:'row',
          gap:'-30px',
          justifyContent:'space-evenly',
          alignItems:"center",
          position:"fixed",
          color:'white', */}
      
        
          <div>

          <Link to="/" style={{ textDecoration:'none'}}>    
          <span  > <h2 style={{color:'white' }}> CapacityBay Store</h2></span>
          </Link> 
          </div>
          <div>
          <input type="text" placeholder='Search Products' onChange={(e)=>{e.target.value}} style={{height:'20px', borderRadius:'5px', borderColor:'white'}} />
          </div>
          <div>
          <button onClick={toggleMode} style={styles.button}><span>{mode === "light" ? "Dark Mode 🌙" : "Light Mode ☀️"} </span></button>
          </div>  
          
          <div>
          <Link to="/checkOutPage">          
          <span><CartIcon/></span>
          </Link>
          </div>
          
          
        </header>
        <br/><br/><br/>
    </div>  
    )
}



export default Header


