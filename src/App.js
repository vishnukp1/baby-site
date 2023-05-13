
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Main from './Pages/Main';

import Babydress from './products/Babydress';
import Babyfood from './products/Babyfood';
import Babytoys from './products/Babytoys';
import { useState } from 'react';
import { babyshop } from './context';
import { PRODUCTS } from './data';
import NavbarTop from './Pages/Navbar'
import LogIn from './Pages/LogIn';


import SignUp from './Pages/SignUp';

import Cartgood from './cart/Cartgood';
import Cartitem from './cart/Cartitem';





 function App() {
  const [state,setState]=useState(PRODUCTS);
  const [email,setemail]=useState([])
 

  const [cart,setcart]=useState([])
  const [auth,setauth]=useState(false)
  const data={
   
    state,
    setState,
    email,
    setemail,
    cart,
    setcart,
    auth,
    setauth,
    
  }
console.log(state);
  return (
 <>
  
 <babyshop.Provider  value={data}>
 
 <NavbarTop />



 


 <Routes>
        <Route path="/" element={ <Main /> } />
        <Route path="/babyfood" element={ <Babyfood /> } />
        
        <Route path='/babydress' element={<Babydress/>}/>
        <Route path='/babytoys' element={<Babytoys/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/cart/:id' element={<Cartgood />}/>
        <Route path='/cartitem' element={<Cartitem />}/>
        
      </Routes>
      
    
     </babyshop.Provider >
 </>
    
  
    
  )
}
export default App