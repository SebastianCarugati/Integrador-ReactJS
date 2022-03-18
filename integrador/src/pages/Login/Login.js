import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../../redux/auth";
import { useNavigate } from "react-router";
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClick = (e) => {
    if (email !== "" && password !== "") {
    dispatch(LoginAction({ email, password}, navigate('/productos')));}
    else 
    {
      alert ("Te faltan campos por completar")
    }

  };

  

  return (
    <div className="contenedor">
      <h1> Logueate </h1>
      <h5> Correo electronico </h5>
      <input type="text" placeholder="Email" value={email} onChange={handleChangeEmail} />
      <h5> Password </h5>
      <input type="password" placeholder="Contraseña" value={password} onChange={handleChangePassword} />
      <div className="contenedor-button">
      <button className="button" onClick={handleClick}>Logueate</button>
      </div>
    </div>
  );
};

export default Login;
