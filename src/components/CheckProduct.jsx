import { FaRegWindowClose } from "react-icons/fa";
import { useStateValue } from "../StateProvider";
function CheckProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="cart-item">
      <span className="fas fa-times" >
      <FaRegWindowClose onClick={removeFromBasket}/>
      </span> 
    

      <img src={image} alt="" />
      <div className="content">
        <h3>cart item</h3>
        <div className="price">$ {price}</div>
      </div>
    </div>
  );
}

export default CheckProduct;
