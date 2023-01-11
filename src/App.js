import React from "react";
import './App.css';
import SignUp from "./components/SignUp";
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./components/Login";


const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route exact path={"/login"} element={<Login/>} />
          <Route path={"/signup"} element={<SignUp/>} />
          <Route path={"/"} element={<Navigate to={"/signup"}/>}/>
      </Routes>
    </div>
  );
}

export default App;
