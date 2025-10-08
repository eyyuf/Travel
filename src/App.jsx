import React from 'react'
import Navbar from './Componenets/navbar/Navbar'
import Footer from './Componenets/footer/footer'
import GalleryCard from './Componenets/GalleryCard/GalleryCard'

const App = () => {
   const countries = [
    { imageUrl: "https://picsum.photos/400/300?1", country: "Japan" },
    { imageUrl: "https://picsum.photos/400/300?2", country: "Italy" },
    { imageUrl: "https://picsum.photos/400/300?3", country: "Ethiopia" },
    { imageUrl: "https://picsum.photos/600/300?4", country: "Brazil" }
  ];


  return (
    <div>
      <div>
        <Navbar />  
      </div>
      <div
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
        <GalleryCard key={index} imageUrl={item.imageUrl} country={item.country} />
      ))}
    </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App