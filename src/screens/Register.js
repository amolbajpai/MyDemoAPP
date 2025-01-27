import React from 'react'

function Register() {
    function handleRegister(event){
        event.preventDefault(); // Do not Reload the screen on calling this funtion
        console.log("Jai Shri Ram")
    }
    let age = 19;
    let emailId = "ram@gmail.com";

  return (
    
        <form>
          {age > 18 && emailId == "ram@gmail.com"? (
            <div>
            <input type="email" placeholder="Enter email" />
            <button onClick={handleRegister}>Submit</button>
            </div>
          ): (
            <h1>Age is less than 18</h1>
          )}
          
        </form>
    
  )
}

export default Register