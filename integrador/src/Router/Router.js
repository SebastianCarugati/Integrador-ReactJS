import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Product from "../pages/Products/Productos";
import Home from "../pages/Home/Home";

const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/productos' element={<Product/>} />
        <Route path='/home' element={<Home/>} />
        <Route path= '*' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;