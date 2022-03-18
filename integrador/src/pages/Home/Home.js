import './Home.css';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

const Home = () => {
    
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register')
    };

    const handleLogin = () => {
        navigate('/login')
    };

    const handleProductos = () => {
        navigate('/productos')
    };




  return (

    <div className='contenedor-general'>
        <h1 className='title'>Bienvenido a mi proyecto React JS</h1>
        <div className='contenedor-button'>
        <button onClick={handleRegister} className='button'>Registrarse</button>
        <button onClick={handleLogin}className='button'>Login</button>
        <button onClick= {handleProductos} className='button'>Productos</button>
        </div>
    </div>
  )
}

export default Home