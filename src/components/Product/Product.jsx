import React from "react";
import { Cards } from "../data/Data";

const Product = () => {
  const whatsappNumber = "+917042531365"; // The WhatsApp number
  
  // Function to handle WhatsApp navigation
  const handleWhatsApp = (id, name) => {
    const message = `Want to know more about ${name} with id: ${id}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <>
      <div className='content grid3 mtop' style={{ margin: '20px', borderRadius: '10px' }}>
        {Cards.map((val, index) => {
          const { id, cover, name, type } = val; // Get id, name, cover, and type from val
          return (
            <div className='box shadow' key={index} style={{ padding: '25px', borderRadius: '25px' }}>
              <div className='img'>
                <img src={cover} alt={name} style={{ borderRadius: '25px' }} />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
              </div>
              <div className='button flex'>
                <span>{type}</span>
              </div>
              <button
                style={{
                  marginTop: '10px',
                  padding: '10px 20px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
                onClick={() => handleWhatsApp(id, name)}
              >
                Contact on WhatsApp
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
