import { FaEye, FaShare } from "react-icons/fa";
import { useStateValue } from "../StateProvider";
import { FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";

function Product({ id, title, image, price, rating }) {
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
      <a href="#" className="bx bxs-heart">
        <FaShare />
      </a>
      <a href="#" className="bx bxs-low-vision">
        <FaEye />
      </a>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div className="stars">
      {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <i>⭐</i>
                    ))}
      </div>
      <span>$ {price}</span>
      <button className="btn"  onClick={addToBasket}>add to basket</button>
    </div>
  );
}

export default Product;
