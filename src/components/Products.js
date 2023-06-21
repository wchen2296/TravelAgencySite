import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1>Personal Space Suits</h1>
      <p>Choose your suit and explore the universe in style and safety.</p>
      <div className="products-grid">
        <div className="product-card">
          <img className="product-img" src="https://i.pinimg.com/564x/69/41/96/694196bc5249e073348694b7b00c7f07.jpg" alt="Suit Tier 1" />
          <h2>Nebula Nomad</h2>
          <h3>Tier 1: Astro Adventurer</h3>
          <br/>
          <p>
            Explore hazardous environments with ease using the Nebula Nomad suit.
            Designed with advanced materials, it offers protection against
            extreme temperatures and radiation.
          </p>
        </div>
        <div className="product-card">
          <img className="product-img" src="https://i.pinimg.com/564x/92/ad/a0/92ada0f7bf9d658dd9af7b89047f6eaa.jpg" alt="Suit Tier 2" />
          <h2>Cosmic Conqueror</h2>
          <h3>Tier 2: Galactic Guardian</h3>
          <br/>
          <p>
            Enhance your movement with the Cosmic Conqueror suit. Featuring
            state-of-the-art exoskeleton technology, it enables enhanced
            movement and navigation in the most extreme environments. Feel like a superhero while you explore.
          </p>
        </div>
        <div className="product-card">
          <img className="product-img" src="https://i.pinimg.com/564x/b4/ab/96/b4ab96269fe8c4c8a3aa93b411a65754.jpg" alt="Suit Tier 3" />
          <h2>Star Strider</h2>
          <h3>Tier 3: Stellar Sentinel </h3>
          <br/>
          <p>
            Equipped with latest cutting edge technology and all the capabilites of previous suits.
            Explore for lengthy durations with the Star Strider suit. Built
            with the most robust life support systems of our times, it ensures extended
            excursions and ultimate comfort during your space adventures.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
