import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../Assets/HomePagePhones.jpg";
import "../Styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Uke`s Mobile Phones Store </h1>
        <p>All types of phones are available</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
