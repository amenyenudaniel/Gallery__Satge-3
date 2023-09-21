import loader from "../../assets/loader.svg";
import "./Loader.css";
const Loader = () => {
  return (
    <div className="loader">
      <img src={loader} alt="loader" />
    </div>
  );
};

export default Loader;
