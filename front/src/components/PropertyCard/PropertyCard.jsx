import "./propertyCard.css";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ card }) => {
  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card" onClick={() => navigate(`/properties/${card._id}`)}>
      <AiFillHeart size={24} color="white" />
      <img src={card.image} alt="Home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>$</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{card.title}</span>
      <span className="secondaryText">{card.description}</span>
    </div>
  );
};

export default PropertyCard;
