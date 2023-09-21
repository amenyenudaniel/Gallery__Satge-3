import React from "react";
import "./Navbar.css";
import { SearchBar } from "../../components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <h1 className="logo" onClick={() => navigate("/gallery")}>
        AIGallery
      </h1>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
