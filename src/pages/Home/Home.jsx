import { Loader, Navbar } from "../../components";
import { getRandomImages } from "../../utils/fetchApi";
import "./Home.css";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
    <div>
      <Navbar />
      <DragDropContext onDragEnd={handleDragDrop}>
        <Droppable droppableId="ROOT" type="group">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="random__images__container"
            >
              {images &&
                images?.map((image, index) => {
                  const slicedDescription =
                    image?.alt_description?.slice(0, 30) + "...";
                  return (
                    <Draggable
                      draggableId={image?.urls?.small}
                      key={image?.urls?.small}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="image__card"
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          style={{
                            display: "inline-block",
                            position: "relative",
                            width: "20%",
                          }}
                        >
                          <img src={image?.urls?.regular} alt="" />
                          <p>{slicedDescription}</p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Home;
