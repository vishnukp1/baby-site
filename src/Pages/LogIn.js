import React, { useContext, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { babyshop } from '../context'

.
function LogIn() {
  const data=useContext(babyshop)
  const {email,setauth}=data
  const nevigate=useNavigate()
  
  const inputref= useRef()
const loginPass=()=>{
  const setPassword=inputref.current.upassword.value;
  const setEmail=inputref.current.uemail.value;

  const userdata=email.filter(( item)=> item.userEmail===setEmail && item.userPassword===setPassword)
if (userdata.length>0){
 
  setauth(true)
  alert("You have successfully logged");
  nevigate("/");
  

}else{
  alert("Email and Password did not match")
}
}
function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}


  return (
    <div className='login'> 
    <form ref={inputref} onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Email </label>
         <input type="email" name="uemail"  required/>
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="upassword" required />
       
       </div>
      
     <button onClick={loginPass} >submit</button>
     <label>Already have an account?</label><Link to="/signup">Signup</Link>

       </form>
</div>
  )
}

export default LogIn


