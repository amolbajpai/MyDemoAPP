import React, { useEffect } from 'react'
import './Register.css'
import { useState } from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault(); // Do not Reload the screen on calling this funtion
        console.log("Jai Shri Ram")
    }
    const [age, setAge] = useState(20);
    let emailId = "ram@gmail.com";

    const [email, setEmail] = useState();

    function updateAge(event,num){
      event.preventDefault();
        setAge(age +num);
    }
    useEffect(() => {
      setEmail("ram@gmail.com")
      console.log("Ram",email)
    }, [age])


  return (
    
        <form>
          <input type="number" value={age} placeholder="Enter age" />
          <button onClick={(e)=>updateAge(e,2)}>Submit</button>

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