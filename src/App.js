import { Routes,Route } from "react-router-dom";
import React from "react";
import '../src/App.css';
import LoginForm from "./Login/login.jsx";
import RegistrationForm from "./Register/registration";
import UserPage from "./User/user";
import OrderBurger from "./PreBurger/orderburger";
import CustomizeBurger from "./MakeBurger/customize";
import CheckOutPage from "./CheckOut/checkout";
function App() {
  return (
    <div>
      <Routes>
      <Route path='/' element={<UserPage />}/>
      <Route path='/index/:id' element={<UserPage/>} ></Route>
      <Route path='/order/:id' element={<OrderBurger/>} ></Route>
      <Route path='/login' element={<LoginForm/>}></Route>
      <Route path='/register' element={<RegistrationForm/>}></Route>
      <Route path='/customize/:id' element={<CustomizeBurger/>}></Route>
      <Route path='/checkout/:id/:details' element={<CheckOutPage/>}></Route>
      <Route path='/customizecheckout/:id/:details' element={<CheckOutPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
