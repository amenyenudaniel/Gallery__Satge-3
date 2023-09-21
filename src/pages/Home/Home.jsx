import { ReactSortable } from "react-sortablejs";
import { Loader, Navbar } from "../../components";
import { getRandomImages } from "../../utils/fetchApi";
import "./Home.css";
import { useEffect, useState } from "react";

const Home = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      getRandomImages()
        .then((data) => {
          setImages(data?.results);
        })
        .finally(() => {
          setLoading(false);
        });
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

      <ReactSortable
        animation={300}
        list={images}
        setList={setImages}
        className="random__images__container"
      >
        {images &&
          images?.map((image, index) => {
            const slicedDescription =
              image?.alt_description?.slice(0, 30) + "...";

            return (
              <div className="image__card">
                <img src={image?.urls?.regular} alt="" />
                <p>{slicedDescription}</p>
              </div>
            );
          })}
      </ReactSortable>
    </div>
  );
};

export default Home;
