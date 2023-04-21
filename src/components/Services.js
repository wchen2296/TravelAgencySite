import React from 'react';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1>Explore Our Destinations</h1>
      <div className="services-grid">
        <div className="service-card">
          <img src="https://th-thumbnailer.cdn-si-edu.com/JDvAFFgQNz6VXZ3Swpm31aqUWGY=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/00/ac/00acaa36-3745-43c0-82c2-b78b4b0002d0/14h_fm2017_opener_torpor-11_live.jpg" alt="Mars" />
          <h2>Mars</h2>
          <p>
            Experience the Red Planet like never before! Mars offers a unique landscape with
            the largest volcano in the solar system and the longest canyon known to humans.
            Discover the wonders of Mars and its potential for future colonization.
          </p>
        </div>
        <div className="service-card">
          <img src="https://imageio.forbes.com/specials-images/imageserve/614d7dc5823eb50bdd9a5a61/Planet-Venus-/960x0.jpg?format=jpg&width=960" alt="Venus" />
          <h2>Venus</h2>
          <p>
            Explore the mysteries of Venus, Earth's "sister planet." Experience the
            intense heat and atmospheric pressure while witnessing the planet's unique
            surface features. Uncover the secrets of Venus's thick cloud cover and
            volcanic activity.
          </p>
        </div>
        <div className="service-card">
          <img src="https://images.newscientist.com/wp-content/uploads/2019/04/15123729/gettyimages-680803053.jpg" alt="Moon" />
          <h2>The Moon</h2>
          <p>
            Relive the historic lunar landings with a trip to Earth's natural satellite.
            The Moon offers a breathtaking view of Earth, awe-inspiring lunar landscapes,
            and the chance to experience low gravity. Embark on an unforgettable
            adventure to the Moon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
