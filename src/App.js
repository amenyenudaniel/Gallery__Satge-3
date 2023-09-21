import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, LogIn, Search, SignUp } from "./pages";
import "./App.css";

import { ScrollToTop } from "./components";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/gallery" element={<Home />} />
        <Route path="/search/:searchTerm" element={<Search />} />
      </Routes>
    </>
  );
};

export default App;
