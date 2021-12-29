import "./home.css"
function Home() {
  return (

      <section class="home" id="home">
        <div class="swiper-container home-slider">
          <div class="swiper-wrapper wrapper">
            <div class="swiper-slide slide">
              <div class="content">
                <span>our special products</span>
                <h3>products electronics</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed
                  temporibus illo recusandae consectetur provident officia animi
                  fuga id incidunt mollitia.
                </p>
                <a href="#" class="btn">
                  Buy Now
                </a>
              </div>
              <div class="image">
                <img src="assets/images/Workshop.png" alt="" />
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </section>
  
  );
}

export default Home;
