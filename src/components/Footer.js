import React from "react";
import "../css/footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="social">
        <a
          href="https://www.facebook.com/jbleibdrey/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://mobile.twitter.com/jonbleibdrey"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/ournaturalstateofbeing/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://github.com/jonbleibdrey"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <p>Copyright &copy; 2021 - Jonathan Bleibdrey</p>
    </footer>
  );
};

export default Footer;
