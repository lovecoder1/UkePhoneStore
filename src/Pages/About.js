import React from "react";
import aboutImage from "../Assets/aboutImage.png";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${aboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h3> ABOUT US</h3>
        <p>
Uke phone store has been operating since 2000 in Columbus Ohio, and recently opened a new store in Minneapolis–Saint Paul in MN. 
We have over 5000 clients and others we serve for 24/7!
        </p>
      </div>
    </div>
  );
}

export default About;
