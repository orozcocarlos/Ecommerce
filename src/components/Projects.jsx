import "./projects.css";
import { FaYoutube } from "react-icons/fa";
import Project from "./Project";
import { projectEcommerce } from "../data";
import { useState , useEffect} from "react";


function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectEcommerce);
  }, [true]);
  return (
    <section className="projects" id="projects">
      <h3 className="sub-heading">Our Projects</h3>
      <h1 className="heading">Projects and works</h1>

      <div className="box-container">
        {
          projects.map(d => (
            <Project
            id={d.id}
            title={d.title}
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam?"
            price={11.96}
            rating={4}
            image={d.image}
            site={d.site}
          />
          ))
        }
       
        {/* <div className="box">
            <div className="image">
              <img src="assets/images/project1.png" alt="" />
              <a href="#" className="fas fa-heart"><FaYoutube/></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="assets/images/alexandru-acea-GhwCef9VRr4-unsplash.jpg" alt="" />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="assets/images/harrison-broadbent-1mu9gF8OhNk-unsplash.jpg" alt="" />
              <a href="#" className="fas fa-heart"><FaYoutube/></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="assets/images/karminski-eVO43ujFEds-unsplash.jpg"
                alt=""
              />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="assets/images/nenad-grujic--b3wxY6jKEk-unsplash.jpg"
                alt=""
              />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img
                src="assets/images/niclas-illg-PlGxLYGhIDg-unsplash.jpg"
                alt=""
              />
              <a href="#" className="fas fa-heart"></a>
            </div>
            <div className="content">
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
  
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" className="btn">Add to Cart</a>
              <span className="price">$100</span>
            </div>
          </div> */}
      </div>
    </section>
  );
}

export default Projects;
