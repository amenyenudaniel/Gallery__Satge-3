import "./Search.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ImageCard, Loader, Navbar } from "../../components";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { ReactSortable } from "react-sortablejs";
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

  if (loading) {
    return <Loader />;
  }

  const handleDragDrop = (results) => {
    const { source, destination, type } = results;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === "group") {
      const orderImages = [...images];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      const [removedImage] = orderImages.splice(sourceIndex, 1);
      orderImages.splice(destinationIndex, 0, removedImage);
      return setImages(orderImages);
    }
  };
  return (
    <>
      <Navbar />
      <h1 className="searchWord">
        Search results for <span>{searchTerm}</span>
      </h1>

      <ReactSortable
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
    </>
  );
};

export default Search;
