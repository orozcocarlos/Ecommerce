import React from "react";
import { FaStar ,FaStarHalfAlt , FaQuoteRight} from "react-icons/fa";
import "./review.css"
function Review() {
  return (
    <section className="review" id="review">
      <h3 className="sub-heading">custumer's review</h3>
      <h1 className="heading">what they say</h1>
      <div className="swiper-container review-slider">
        <div className="swiper-wrapper">
          <div className="swiper-slide slide">
            <i className="fas fa-quote-right"><FaQuoteRight/></i>
            <div className="user">
              <img src="assets/images/user.png" alt="" />
              <div className="user-info">
                <h3>john deo</h3>
                <div className="stars">
                  <i className="fas fa-star"><FaStar/></i>
                  <i className="fas fa-star"><FaStar/></i>
                  <i className="fas fa-star"><FaStar/></i>
                  <i className="fas fa-star"><FaStar/></i>
                  <i className="fas fa-star-half-alt"><FaStarHalfAlt/></i>
                </div>
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              fugiat consequuntur repellendus aperiam deserunt nihil, corporis
              fugit voluptatibus voluptate totam neque illo placeat eius quis
              laborum aspernatur quibusdam. Ipsum, magni.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;
