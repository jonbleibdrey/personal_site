import React, { useRef } from "react";
import Elephant from "../assets/images/elephant.jpeg";
import emailjs from '@emailjs/browser';
import "../css/contact.css";

const Contact = () => {
  const form = useRef();
  const service = process.env.REACT_APP_SERVICE_ID;
  const template = process.env.REACT_APP_TEMPLATE_ID;
  const user = process.env.REACT_APP_USER_ID;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("What do we get: ", process.env);
    emailjs.sendForm(service, template, form.current, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact" className="contact flex-columns">
      <div className="row">
        <div className="column">
          <div className="column-1">
            <img src={Elephant} alt="elephant" />
          </div>
        </div>
        <div className="column">
          <div className="column-2 bg-light">
            <h2>Request CallBack</h2>
            <form onSubmit={handleSubmit} ref={form} className="callback-form">
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-control">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                />
              </div>
              <div className="form-control">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter Message"
                />
              </div>
              <input type="submit" value="send" id="submit" className="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
