import React, { useContext, useRef} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./login.css"
import { babyshop } from '../context'

function SignUp() {
  const data=useContext(babyshop)
  const {email,setemail}=data
  const navigate = useNavigate()
const inputref=useRef(null)
const submithandle=()=>{
  const userName=inputref.current.name.value;
  const userPassword=inputref.current.password.value;
  const userEmail=inputref.current.email.value;
setemail([...email, {userName, userEmail, userPassword }]);
navigate("/login");
}

console.log(inputref);
function handleSubmit(e) {
  e.preventDefault();
  console.log('You clicked submit.');
}

  return (
    <div  className='login'>
   <form ref={inputref} onSubmit={handleSubmit}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="name" required />
         
       </div>
       <div className="input-container">
         <label>Email </label><br></br>
         <input type="email" name="email"  required/>
         
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required />
       
       </div>
     <button onClick={submithandle} >submit</button>
     <label>Already have an account?</label><Link to="/login">Login</Link>
       </form>
    
</div>
  )
}

export default SignUp;
