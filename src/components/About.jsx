import "./about.css"
import { FaShippingFast , FaDollarSign ,FaHeadset} from "react-icons/fa";

function About() {
    return (
        <section className="about" id="about">
        <h3 className="sub-heading">about us</h3>
        <h1 className="heading">Why choose us?</h1>
        <div className="row">
          <div className="image">
            <img src="assets/images/about.png" alt="" />
          </div>
          <div className="content">
            <h3>best product in the country</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta a
              consequatur voluptates, iste repellat consequuntur id commodi itaque
              enim deserunt. Cum ea fugiat fugit beatae deleniti quidem sapiente
              odio consectetur.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              tempore?
            </p>
            <div className="icons-container">
              <div className="icons">
                <i className="fas fa-shipping-fast"><FaShippingFast/></i>
                <span>free delivery</span>
              </div>
              <div className="icons">
                <i className="fas fa-dollar-sign"><FaDollarSign/></i>
                <span>easy payments</span>
              </div>
              <div className="icons">
                <i className="fas fa-headset"><FaHeadset/></i>
                <span>24/7 service</span>
              </div>
            </div>
            <a href="#" className="btn"> Learn more</a>
          </div>
        </div>
      </section>
    )
}

export default About
