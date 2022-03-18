import { useState } from 'react'
import {registerAction} from "../../redux/register"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const CreateUser = () => {


    const dispatch = useDispatch();
    const [name, setName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [password, setPassword] = useState ('')
    const [email, setEmail] = useState ('')
    const navigate = useNavigate();


    const handleName = (e) => {
        setName (e.target.value)
    }

    const handleLastName = (e) => {
        setLastName (e.target.value)
    }

    const handlePassword = (e) => {
        setPassword (e.target.value)
    }

    const handleEmail= (e) => {
        setEmail (e.target.value)
    }


    const onRegister = () => {
        if (name !== "" && lastName !== "" && email !== "" && password !== ""){
            dispatch (registerAction ({name, lastName, email, password}, navigate('/login')))
        }
        else {
            alert ("Te faltan campos por completar") 
    }}


    return (
        <div className='contenedor'>
            <div>
            <strong><h2>Nombre</h2></strong>
            <input onChange={handleName} value= {name} name='name' placeholder='firstName' required/>
            <strong><h2>Apellido</h2></strong>
            <input onChange={handleLastName} value= {lastName}  name='lastName' placeholder='lastName'required/>
            <strong><h2>Email</h2></strong>
            <input onChange={handleEmail} value= {email} name='email' placeholder='email' required/>
            <strong><h2>Contraseña</h2></strong>
            <input onChange={handlePassword} value= {password} name='password' type='password' placeholder='password' required/>
            </div>
            <div className='contenedor-button'>
            <button className='button' onClick={onRegister}>Create</button>
            </div>
        </div>
    )
}

export default CreateUser   