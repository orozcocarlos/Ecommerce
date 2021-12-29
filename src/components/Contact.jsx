import "./contact.css"
import emailjs from "emailjs-com";
import { useRef } from "react";
import { useState } from "react";
function Contact() {
  const formRef = useRef();

  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_g7n6n8m",
        "template_9n4oap7",
        formRef.current,
        "user_yqimngPQxBoZsByq1zEN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
    return (
        <section className="contact" id="contact">
        <h3 className="sub-heading">Contact</h3>
        <h1 className="heading">Contact me</h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="inputBox">
            <div className="input">
              <input type="text" placeholder="your name" name="user_name"  required/>
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <input type="email" placeholder="your email" name="user_email" required />
            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <input
                type="text"
                placeholder="your subject"
                name="user_subject"
                required
              />            </div>
          </div>
          <div className="inputBox">
            <div className="input">
              <textarea
              name="message"
              placeholder="your message"
              id=""
              cols="30"
              rows="10"
              required
            ></textarea>
            </div>
          </div>
          <input type="submit" value="Send Message" className="btn" />
          <br />
            <p> {message && " Thank You...."}</p>
        </form>
      </section>
    )
}

export default Contact
