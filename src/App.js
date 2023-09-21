import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, LogIn, SignUp } from "./pages";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
