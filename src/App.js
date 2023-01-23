import React, { useContext } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import './style.scss'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext'

const App = () => {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser);
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes> 
    </BrowserRouter>  
  )
}

export default App
