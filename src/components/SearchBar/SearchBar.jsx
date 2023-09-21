import "./SearchBar.css";
import SearchIcon from "../../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className="searchBar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        value={searchTerm}
      />
      <img
        src={SearchIcon}
        alt="search-icon"
        onClick={() => handleSearch(searchTerm)}
      />
    </form>
  );
};

export default SearchBar;
