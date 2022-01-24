import React from "react";
import Elephant from "../assets/images/elephant.jpeg";
import "../css/contact.css";

const Contact = () => {
  return (
    <section id="contact" class="contact flex-columns">
      <div class="row">
        <div class="column">
          <div class="column-1">
            <img src={Elephant} alt="elephant" />
          </div>
        </div>
        <div class="column">
          <div class="column-2 bg-light">
            <h2>Request CallBack</h2>
            <form action="" class="callback-form">
              <div class="form-control">
                <label for="name"></label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Name"
                />
              </div>
              <div class="form-control">
                <label for="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                />
              </div>
              <div class="form-control">
                <label for="phone"></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Enter Phone"
                />
              </div>
              <input type="submit" value="send" id="submit" class="btn" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
