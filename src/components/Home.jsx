import "./home.css"
function Home() {
  return (

      <section className="home" id="home">
        <div className="swiper-container home-slider">
          <div className="swiper-wrapper wrapper">
            <div className="swiper-slide slide">
              <div className="content">
                <span>our special products</span>
                <h3>products electronics</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  temporibus illo recusandae consectetur provident officia animi
                  fuga id incidunt mollitia.
                </p>
                <a href="#" className="btn">
                  Buy Now
                </a>
              </div>
              <div className="image">
                <img src="assets/images/Workshop.png" alt="" />
              </div>
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </section>
  
  );
}

export default Home;
