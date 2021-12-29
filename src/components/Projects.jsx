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
    <section class="projects" id="projects">
      <h3 class="sub-heading">Our Projects</h3>
      <h1 class="heading">Projects and works</h1>

      <div class="box-container">
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
       
        {/* <div class="box">
            <div class="image">
              <img src="assets/images/project1.png" alt="" />
              <a href="#" class="fas fa-heart"><FaYoutube/></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src="assets/images/alexandru-acea-GhwCef9VRr4-unsplash.jpg" alt="" />
              <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img src="assets/images/harrison-broadbent-1mu9gF8OhNk-unsplash.jpg" alt="" />
              <a href="#" class="fas fa-heart"><FaYoutube/></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img
                src="assets/images/karminski-eVO43ujFEds-unsplash.jpg"
                alt=""
              />
              <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img
                src="assets/images/nenad-grujic--b3wxY6jKEk-unsplash.jpg"
                alt=""
              />
              <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div>
          <div class="box">
            <div class="image">
              <img
                src="assets/images/niclas-illg-PlGxLYGhIDg-unsplash.jpg"
                alt=""
              />
              <a href="#" class="fas fa-heart"></a>
            </div>
            <div class="content">
              <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
  
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <h3>Arduino</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos,
                ipsum.
              </p>
              <a href="#" class="btn">Add to Cart</a>
              <span class="price">$100</span>
            </div>
          </div> */}
      </div>
    </section>
  );
}

export default Projects;
