import "./Search.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImageCard, Loader, Navbar } from "../../components";
const Search = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchTerm } = useParams();

  const fetchApi = async () => {
    try {
      const { data } = await axios.get(
        `https://api.unsplash.com/search/photos/?client_id=-TKWnf0lgg5v-IuEg3Cbub1RLev6DP26LWbIzfD97F0&query=${searchTerm}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchApi()
        .then((data) => {
          setImages(data?.results);
          console.log(data?.results);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {}
  }, [searchTerm]);

  if (images.length === 0) {
    return <h1>Opps! Try searching for another keyword.</h1>;
  }
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <h1 className="searchWord">
        Search results for <span>{searchTerm}</span>
      </h1>
      <div className="search__container">
        {images?.map((image) => (
          <ImageCard key={image?.description} image={image} />
        ))}
      </div>
    </>
  );
};

export default Search;
