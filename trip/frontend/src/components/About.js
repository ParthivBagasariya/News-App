import React from "react";
import Base from "./Base";
import img2 from "../imges/i14.jpg"
import "./About.css"
import Aboutdata from "./Aboutdata";


const About = () => {
  return (
    <div>
       <Base
        cName="about"
        img={img2}
        title="About" 
      /> 
      <Aboutdata/>
    </div>
  );
};

export default About;
