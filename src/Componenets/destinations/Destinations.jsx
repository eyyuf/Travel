import React from 'react';
import "./Destinations.css";
import landscape from "../../assets/landscape.jpg";
import slovenia from "../../assets/slovenia.jpg";
import sunset from "../../assets/sunset.jpg";

const destinations = [
  { img: landscape, title: "Landscape", desc: "Home of obelisks" },
  { img: slovenia, title: "Slovenia", desc: "Natural beauty" },
  { img: sunset, title: "Sunset", desc: "Heaven of hikers" }
];

const Destinations = () => {
  return (
    <div className="section">
      <h2 className="dest-popular">Popular Destinations</h2>

      <div className="destination-grid">
        {destinations.map((dest, idx) => (
          <div className="dest-card" key={idx}>
            <img src={dest.img} alt={dest.title} />
            <div className="dest-info">
              <h3>{dest.title}</h3>
              <p>{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;