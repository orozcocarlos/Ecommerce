import "./products.css";
import { FaEye, FaShare } from "react-icons/fa";
import Product from "./Product";
import { productsEcommerce } from "../data";
import { useState , useEffect} from "react";
function Products() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setProduct(productsEcommerce);
  }, [true]);
  return (
    <section className="products" id="products">
      <h3 className="sub-heading">our products</h3>
      <h1 className="heading">popular products</h1>

      <div className="box-container">
        {product.map(d => (
          <Product
          id={d.id}
          title={d.title}
          price={d.price}
          rating={d.rating}
          image={d.image}
        />
        ))}
      
        {/* <div className="box">
            <a href="#" className="bx bxs-heart"><FaShare/></a>
            <a href="#" className="bx bxs-low-vision"><FaEye/></a>
            <img src="assets/images/esp32-cam.jpg" alt="" />
            <h3>
              ESP32-CAM con cámara OV2640 - ESP32 WiFi</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/raspbian.png" alt="" />
            <h3>Esp8266 With Arduino Uno</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/arduno.png" alt="" />
            <h3>Arduino Uno</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/Digital-Multimeter.png" alt="" />
            <h3>Digital Multimeter Voltmeter Direct current Current</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/nodemcu-v2-esp8266-wifi.jpg" alt="" />
            <h3>
  
              NodeMCU v2 ESP8266 WiFi</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/diodo-led-5mm.jpg.crdownload" alt="" />
            <h3>
     
              Diodo Led 5mm</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/ci-7408-74ls08-2uds_600.jpeg" alt="" />
            <h3>
              CI 7408, 74LS08, 2uds</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div>
          <div className="box">
            <a href="#" className="bx bxs-heart"></a>
            <a href="#" className="bx bxs-low-vision"></a>
            <img src="assets/images/755169502.jpg" alt="" />
            <h3>
              Protoboard Doble 1660 Puntos</h3>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star-half"></i>
            </div>
            <span>$15.89</span>
            <a href="#" className="btn">Buy Now</a>
          </div> */}
      </div>
    </section>
  );
}

export default Products;
