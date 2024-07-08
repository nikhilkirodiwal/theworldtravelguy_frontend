// import React from 'react';
// import './Get.css'; 
// import insta from '../assets/insta.png'
// import facebook from '../assets/facebook.png'
// import pinterest from '../assets/pinterest.png'


// const Get = () => {
//   return (
//     <div className="get-container">
//       <div className="background-overlay"></div>
//       <div className="get-content">
//       <h1>GET IN TOUCH</h1>
//       <div className="get-content1">
//       <p>Discover our amazing adventures and book your trip today.</p>
//       <p>Stay connected with us on social media</p>
//       </div>
//       <div className='social'>
//         <a href="#"><img src={facebook} alt="Facebook icon" /></a>
//         <a href="#"><img src={insta} alt="Instagram icon" /></a>
//         <a href="#"><img src={pinterest} alt="Pinterest icon" /></a>
//       </div>
//       <p className='get-content1'>&copy; THE WORLD TRAVEL GUY 2024 </p>
//       </div>
//     </div>
//   );
// }

// export default Get;


import React from 'react';
import './Get.css'; 
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import pinterest from '../assets/pinterest.png';

const Get = () => {
  // Define an array of social media objects
  const socialMediaLinks = [
    { platform: 'Facebook', icon: facebook, alt: 'Facebook icon', url: '#' },
    { platform: 'Instagram', icon: insta, alt: 'Instagram icon', url: '#' },
    { platform: 'Pinterest', icon: pinterest, alt: 'Pinterest icon', url: '#' }
  ];

  return (
    <div className="get-container">
      <div className="background-overlay"></div>
      <div className="get-content">
        <h1>GET IN TOUCH</h1>
        <div className="get-content1">
          <p>Discover our amazing adventures and book your trip today.</p>
          <p>Stay connected with us on social media</p>
        </div>
        <div className='social'>
          {/* Mapping through the social media links array */}
          {socialMediaLinks.map((socialMedia, index) => (
            <a key={index} href={socialMedia.url}>
              <img src={socialMedia.icon} alt={socialMedia.alt} />
            </a>
          ))}
        </div>
        <p className='get-content1'>&copy; THE WORLD TRAVEL GUY 2024 </p>
      </div>
    </div>
  );
}

export default Get;
