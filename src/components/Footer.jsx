import "./footer.css"
function Footer() {
    return (
        
    <section className="footer">
    <div className="box-container">
      <div className="box">
        <h3>locations</h3>
        <a href="#">ambato</a>
        <a href="#">riobamba</a>
        <a href="#">cuenca</a>
        <a href="#">quito</a>
      </div>
      <div className="box">
        <h3>quick links</h3>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#review">Review</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="box">
        <h3>contact info</h3>
        <a href="#">+593-983592690</a>
        <a href="#">+3526-56852</a>
        <a href="#">corozco6489@gmail.com</a>
        
        <a href="#">ambato, ecuador - 180101</a>
      </div>
      <div className="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">linkedin</a>
      </div>
    </div>

    <div className="credit">copyright @ 2021 by <span>electrodev</span></div>
  </section>
    )
}

export default Footer
