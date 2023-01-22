import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Lets Chat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/12461870/pexels-photo-12461870.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar