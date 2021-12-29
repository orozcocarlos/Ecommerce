import { FaYoutube } from "react-icons/fa";
import { useStateValue } from "../StateProvider";
function Project({ id, title, image, description, price, rating, site }) {
  const [state, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="box">
      <div className="image">
        <img src={image} alt="" />
        <a href={site} target="_blank" className="fas fa-heart">
          <FaYoutube />
        </a>
      </div>
      <div className="content">
        <div className="stars">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <i>⭐</i>
            ))}
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button classNameName="btn" onClick={addToBasket}>
          add to basket
        </button>
        <span className="price">$ {price}</span>
      </div>
    </div>
  );
}

export default Project;
