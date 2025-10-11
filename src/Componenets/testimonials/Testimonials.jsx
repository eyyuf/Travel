import React, { useState } from "react";
import landscape from "../../assets/landscape.jpg";
import slovenia from "../../assets/slovenia.jpg";
import sunset from "../../assets/sunset.jpg";
import "./Testimonials.css";

function Testimonial() {
  const slides = [
    { img: landscape, name: "Israel", text: "The travel agency gave me the best trip" },
    { img: slovenia, name: "Eyu", text: "The travel agency is the best" },
    { img: sunset, name: "Kira", text: "I've had the best trip ever" }
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="testimony-section">
      <h2 className="test-title">Testimonies</h2>

      <div className="testimony-slide">
        <div className="test-card">
          <img src={slides[index].img} alt={slides[index].name} />
          <div className="test-info">
            <h3>{slides[index].name}</h3>
            <p>{slides[index].text}</p>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="prev" onClick={prevSlide}> &#60;</button>
        <button className="next"onClick={nextSlide}>&gt;</button>
      </div>
      
    </div>
  );
}

export default Testimonial;
