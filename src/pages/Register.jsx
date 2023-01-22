import React from 'react'
import Add from "../img/addAvatar.png"
const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Lets Chat</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='display name'/>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='passworc'/>
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor='file'>
                    <img src={Add} alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>Do you have an account? Login</p>
        </div>
    </div>
  )
}

export default Register