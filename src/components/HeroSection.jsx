import React from "react";
import "../App.css";
import {Button} from "./Button";
import "./HeroSection.css";
import video from "../videos/video-3.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1>AO INFINITO E ALÉM</h1>
      <p>Embarque nessa aventura!</p>

      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          VER DESTINOS
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          VER PACOTES
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
