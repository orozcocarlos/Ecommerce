import "./header.css";
import {
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
  FaHome,
  FaRegWindowClose,
  FaMicrochip,
} from "react-icons/fa";
import CheckProduct from "./CheckProduct";
import { useState } from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();

  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);

  const handleClick = () => setClick(!click);
  const HandleClick = () => setClick1(!click1);

  const [showMobileMenu, setshowMobileMenu] = useState(false);

  return (
    <header menuOpen={showMobileMenu}>
      <a href="/" className="logo">
        <FaMicrochip className="icon-logo" />
        electrodev.
      </a>
      <nav className={click ? "navbar active" : "navbar"} open={showMobileMenu}>
        <a href="#home" onClick={() => setshowMobileMenu(false)}>
          Home
        </a>
        <a href="#products" onClick={() => setshowMobileMenu(false)}>
          Products
        </a>
        <a href="#about" onClick={() => setshowMobileMenu(false)}>
          About
        </a>
        <a href="#projects" onClick={() => setshowMobileMenu(false)}>
          Projects
        </a>
        <a href="#review" onClick={() => setshowMobileMenu(false)}>
          Review
        </a>
        <a href="#contact" onClick={() => setshowMobileMenu(false)}>
          Contact
        </a>
      </nav>
      <div className="icons">
        <a>
          <FaHome
            className="icons-react"
            id="menu-bars"
            onClick={handleClick}
          />
        </a>

        <a href="#">
          <FaSearch className="icons-react" />
        </a>
        <a href="#">
          <FaRegHeart className="icons-react" />
        </a>
        <a id="cart-btn">
          <FaShoppingCart className="icons-react" onClick={HandleClick} />{" "}
          <span>{basket.length}</span>
        </a>
      </div>

      <div
        className={
          click1 ? "cart-items-container active" : "cart-items-container"
        }
      >

        {basket.map(item =>(
               <CheckProduct  
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}/>


        ))}
   
        {/* <div class="cart-item">
          <span class="fas fa-times">
            <FaRegWindowClose />
          </span>
          <img src="assets/images/esp32-cam.jpg" alt="" />
          <div class="content">
            <h3>cart item 01</h3>
            <div class="price">$15.99/-</div>
          </div>
        </div>
        <div class="cart-item">
          <span class="fas fa-times">
            <FaRegWindowClose />
          </span>
          <img src="assets/images/esp32-cam.jpg" alt="" />
          <div class="content">
            <h3>cart item 02</h3>
            <div class="price">$15.99/-</div>
          </div>
        </div>
        <div class="cart-item">
          <span class="fas fa-times">
            <FaRegWindowClose />
          </span>
          <img src="assets/images/esp32-cam.jpg" alt="" />
          <div class="content">
            <h3>cart item 03</h3>
            <div class="price">$15.99/-</div>
          </div>
        </div>
        <div class="cart-item">
          <span class="fas fa-times">
            <FaRegWindowClose />
          </span>
          <img src="assets/images/esp32-cam.jpg" alt="" />
          <div class="content">
            <h3>cart item 04</h3>
            <div class="price">$15.99/-</div>
          </div>
        </div> */}

        <Subtotal/>
      </div>
    </header>
  );
}

export default Header;
