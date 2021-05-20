import React, { useState } from "react";
import "../css/about.css";

const LogoFile = () => {
  const [imgTag, setImgTag] = useState([
    {
      src1: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
      src2: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
      src3: "https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png",
    },
    {
      src1: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
      src2: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
      src3: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png",
    },
    {
      src1: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Ruby_logo.png",
      src2: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/bootstrap/bootstrap.png",
      src3: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png",
    },
    {
      src1: "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
      src2: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png",
      src3: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
    },
  ]);
  return (
    <div>
      <ul className="about__ulTag">
        <div className="about__logoDiv">Languages and Frameworks</div>
        <li className="about__liTag">
          {imgTag.map((e) => (
            <img
              align="center"
              alt="Languages and frameworks"
              className="about__img1"
              width="50px"
              src={e.src1}
            />
          ))}
        </li>
      </ul>
      <ul className="about__ulTag">
        <div className="about__logoDiv">Styling Used</div>
        <li className="about__liTag">
          {imgTag.map((e) => (
            <img
              align="center"
              alt="Styling used"
              width="50px"
              className="about__img1"
              src={e.src2}
            />
          ))}
        </li>
      </ul>
      <ul className="about__ulTag">
        <div className="about__logoDiv">Other's</div>
        <li className="about__liTag">
          {imgTag.map((e) => (
            <img
              align="center"
              alt="Other's"
              width="50px"
              className="about__img1"
              src={e.src3}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default LogoFile;
