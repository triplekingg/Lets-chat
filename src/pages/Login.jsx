import React from 'react'
const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lets Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Register</p>
        </div>
    </div>
  )
}

export default Login