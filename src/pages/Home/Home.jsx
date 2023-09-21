import { ImageCard, Loader, Navbar } from "../../components";
import { getRandomImages } from "../../utils/fetchApi";
import "./Home.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getRandomImages().then((data) => {
        setImages(data?.results);
        console.log(data?.results);
      }).finally = () => {
        setLoading(false);
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Navbar />

      <div className="random__images__container">
        {images &&
          images?.map((image) => <ImageCard key={image?.id} image={image} />)}
      </div>
    </div>
  );
};

export default Home;
