import "./ImageCard.css";
const ImageCard = ({ image }) => {
  const slicedDescription = image?.alt_description?.slice(0, 30) + "...";
  return (
    <div className="image__card">
      <img src={image?.links?.photos} alt="" />
      <p>{slicedDescription}</p>
    </div>
  );
};

export default ImageCard;
