import React, { useContext } from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Navigate } from 'react-router-dom'
import './style.scss'
import{
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from './context/AuthContext'

const App = () => {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login/"/>
    }

    return children;
  }
  return (
    <BrowserRouter>
      <Routes path="/">
        <Route index element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes> 
    </BrowserRouter>  
  )
}

export default App
