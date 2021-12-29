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
    <div class="cart-item">
      <span class="fas fa-times" >
      <FaRegWindowClose onClick={removeFromBasket}/>
      </span> 
    

      <img src={image} alt="" />
      <div class="content">
        <h3>cart item {id}</h3>
        <div class="price">$ {price}</div>
      </div>
    </div>
  );
}

export default CheckProduct;
