import "./SearchBar.css";
import SearchIcon from "../../assets/search.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchMenu, setSearchMenu] = useState(false);
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
    <>
      <form className="searchBar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleChange}
          value={searchTerm}
        />
        <img
          className="searchDesktop"
          src={SearchIcon}
          alt="search-icon"
          onClick={() => handleSearch(searchTerm)}
        />

        <img
          src={SearchIcon}
          className="searchMobile"
          alt="search-icon"
          onClick={() => setSearchMenu(true)}
        />
      </form>
      {searchMenu && (
        <div className="app__mobile slide-bottom">
          <form className="app__search" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              onChange={handleChange}
              value={searchTerm}
            />
            <img
              src={SearchIcon}
              alt="search-icon"
              className="mobile__icon-search"
              onClick={() => handleSearch(searchTerm)}
            />
            <p onClick={() => setSearchMenu(false)}>&times;</p>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchBar;
