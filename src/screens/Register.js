import React from 'react'
import './Register.css'
import { useState } from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault(); // Do not Reload the screen on calling this funtion
        console.log("Jai Shri Ram")
    }
    let age = 19;
    let emailId = "ram@gmail.com";

    const [email, setEmail] = useState("ram@gmail.com");


  return (
    
        <form>
          {age > 18 && emailId == "ram@gmail.com"? (
            <>
            <div className='form-input'>
            <input onChange={(e) => setEmail(e.target.value)} value={email} name="email" type="email" placeholder="Enter email" />
            <input type="password" placeholder="Enter password" />
            </div>
            <button onClick={handleRegister}>Submit</button>
            <h2>{email}</h2>
            
            </>
          ): (
            <h1>Age is less than 18</h1>
          )}
          
        </form>
    
  )
}

export default Register