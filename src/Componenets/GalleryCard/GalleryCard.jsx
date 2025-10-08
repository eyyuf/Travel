import React from "react";
import "./GalleryCard.css";

function GalleryCard({ imageUrl, country }) {
  return (
    <div className="gallery-card">
      <img src={imageUrl} alt={country} className="gallery-card__image" />
      <div className="gallery-card__overlay">
        <h3 className="gallery-card__country">{country}</h3>
      </div>
    </div>
  );
}

export default GalleryCard;
