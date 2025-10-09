import React from 'react'
import Navbar from './Componenets/navbar/Navbar'
import Footer from './Componenets/footer/footer'
import GalleryCard from './Componenets/GalleryCard/GalleryCard'
import Hero from './Componenets/hero/Hero'
import Destinations from './Componenets/destinations/Destinations'
import Testimonials from './Componenets/testimonials/Testimonials'

const App = () => {
  const countries = [
    { imageUrl: "https://picsum.photos/400/300?1", country: "Japan" },
    { imageUrl: "https://picsum.photos/400/300?2", country: "Italy" },
    { imageUrl: "https://picsum.photos/400/300?3", country: "Ethiopia" },
    { imageUrl: "https://picsum.photos/600/300?4", country: "Brazil" }
  ];

  return (
    <div>
      <Navbar />

      <Hero />
      <Destinations />

      <div className="test-gal">
        <Testimonials />

        <div
          className="gall"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            padding: "40px",
            backgroundColor: "#f5f5f5",
          }}
        >
          {countries.map((item, index) => (
            <GalleryCard
              key={index}
              imageUrl={item.imageUrl}
              country={item.country}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
