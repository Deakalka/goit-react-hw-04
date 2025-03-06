import css from "./ImageCard.module.css";

const ImageCard = ({ card, onSelect }) => {
  return (
    <div>
      <img
        className={css.img}
        src={card.urls.small}
        alt={card.alt_description}
        onClick={() => {
          onSelect(true, {
            src: card.urls.regular,
            description: card.description,
          });
        }}
      />
    </div>
  );
};

export default ImageCard;