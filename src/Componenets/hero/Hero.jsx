import React, { useState, useEffect } from "react";

import landscape from "../../assets/landscape.jpg";
import slovenia from "../../assets/slovenia.jpg";
import sunset from "../../assets/sunset.jpg";
import "./Hero.css";

function Hero() {
  const slides = [
    {img: landscape,title:"landscape", desc: "home of obelisks" }
    ,{img: slovenia,title:"slovenia", desc: "natural beauty" }
    ,{img: sunset,title:"sunset",  desc:"heaven of hikers" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(slide);
  }, []);

  return (
    <div className="hero">
      <img src={slides[index].img} alt="Travel spot" />
      <div className="overlay">
        <h1 className="hero-title">
          {slides[index].title}
        </h1>
        <p className="hero-desc">
          {slides[index].desc}
        </p>

      </div>
    </div>
  );
}

export default Hero;
