import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="aboutus-container">
      <h1>About Us</h1>
        <br/>
      <h2>Our Founder</h2>
      <div className="founder">
        <img src="/images/Founder.png" alt="Founder" />
        <p>
          The visionary behind our company is Dr. Jane Stellar, a daring and
          adventurous scientist who has always been fascinated by the mysteries
          of space. With a PhD in Astrophysics, she dedicated her life to
          advancing space exploration and promoting the idea that the universe is
          a place where anyone can embark on an adventure. Dr. Stellar's
          relentless pursuit of knowledge and her passion for exploration are the
          driving forces behind our mission to bring the cosmos closer to
          everyone.
        </p>
      </div>

      <h2>Our Launch Site</h2>
      <div className="launch-site">
        <img src="https://cdn.mos.cms.futurecdn.net/42927SBNK2Fb6deZQhXH2K.jpg" alt="Launch Site" />
        <p>
          Our state-of-the-art launch site is located at Starlight Avenue 42, Orion Sector, Quadrant Delta in Hawaii, providing a perfect environment for the beginning of your
          extraordinary journey. Combining cutting-edge technology with
          environmental sustainability, our launch site ensures a smooth and
          safe departure towards the wonders of the universe. Your journey beyond the stars begins here. 
        </p>
      </div>
     
<div className="resort">
  <h2>Our Destinations</h2>
  <div className="resort-content">
    <img src="https://i.pinimg.com/originals/e9/a5/fd/e9a5fd07c9cb2c8c213581708f3c3743.jpg" alt="Resort" />
    <p>
      At each of our breathtaking travel destinations, you'll find a safe and
      luxurious resort designed to provide the ultimate space vacation
      experience. Should you wish to venture out and explore the mysteries of
      the cosmos, our team of expert guides will be there to ensure your
      safety and enjoyment. The choice is yours: relax in the comfort of our
      resorts or embark on a thrilling expedition to the unknown.
    </p>
    </div>
</div>

<br/>
<br/>
      
      <h1>Inspiration Awaits</h1>
      <br/>
      <p className='text'>
        We believe that the universe is not just a distant, unreachable place,
        but a destination where anyone can experience the wonders of
        exploration. As you join us on this incredible journey, we invite you
        to unleash your inner adventurer, embrace the extraordinary, and
        redefine what it means to travel. Together, we will traverse the
        cosmos, break down barriers, and create memories that will last a
        lifetime. Are you ready to embark on the adventure of a lifetime?
      </p>
    </div>
  );
}

export default AboutUs;
