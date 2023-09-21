import React from "react";
import "./Navbar.css";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 className="logo" onClick={() => navigate("/")}>
        AIGallery
      </h1>
      <SearchBar />
      <p>profile</p>
    </nav>
  );
};

export default Navbar;
