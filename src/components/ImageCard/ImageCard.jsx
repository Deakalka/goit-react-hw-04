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
            description: card.description || card.alt_description || "No description available",
            author: card.user.name || "Unknown author",
            username: card.user.username,
            likes: card.likes,
            date: new Date(card.created_at).toLocaleDateString(),
            location: card.user.location || "Unknown location"
          });
        }}
      />
    </div>
  );
};

export default ImageCard;