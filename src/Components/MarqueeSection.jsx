import React from 'react';
import logo1 from '../Assets/logo1.jpg';
import logo2 from '../Assets/logo2.jpg';
import logo3 from '../Assets/logo3.jpg';
import logo4 from '../Assets/logo4.jpeg';
import logo5 from '../Assets/logo5.jpg';
import logo6 from '../Assets/logo6.jpeg';
import logo7 from '../Assets/logo7.jpeg';
import logo8 from '../Assets/logo8.jpeg';
import logo9 from '../Assets/logo9.jpeg';
import logo10 from '../Assets/logo10.jpeg';
import logo11 from '../Assets/logo11.jpg';
import logo12 from '../Assets/logo12.jpg';

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6,
  logo7, logo8, logo9, logo10, logo11, logo12
];

const MarqueeSection = () => {
  return (
    <div className='logo-marquee my-5'>
      <h1 className='text-center my-4' style={{fontFamily: "Lucida Handwriting"}}>OUR TOP BRANDS</h1>
      <div className="marquee-wrapper bg-secondary-subtle py-5">
        <div className="marquee-track">
          {logos.map((logo, index) => (
            <img key={`first-${index}`} src={logo} alt={`brand-${index}`} className='img-fluid rounded mx-4' />
          ))}
          {logos.map((logo, index) => (
            <img key={`second-${index}`} src={logo} alt={`brand-${index}`} className='img-fluid rounded mx-4' />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;