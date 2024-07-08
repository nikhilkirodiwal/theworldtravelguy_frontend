// import React from 'react'
// import './About.css'
// import about from '../assets/about.png'

// const About = () => {
//   return (
//     <div className="about">
//     <h1 className="about1"><span>ABOUT US</span></h1>
//     <div className="about-section">
//       <img className="about-image" src={about} alt="About" />
//       <div className="about-text">
//         <h2 className="about-heading">ABOUT ME</h2>
//         <p className="about-description">
//           Hey there! I'm David Leiter, an American who has been traveling the world full time for 8 years now.
//         </p>
//         <p className="about-description"></p>
//         <p className="about-description">
//           My wife Intan and I are usually in our second home Bali, but our journeys take us to destinations all over the world.
//         </p>
//         <p className="about-description"></p>
//         <p className="about-description">
//           Please tag along!
//         </p>
//         <button className="read-more-btn1">Read more</button>
//       </div>
//     </div>
//   </div>
//   )
// }


// export default About

import React from 'react';
import './About.css';
import about from '../assets/about.png';

const About = () => {
  const aboutData = {
    title: 'ABOUT US',
    image: about,
    section: {
      heading: 'ABOUT ME',
      description: [
        "Hey there! I'm David Leiter, an American who has been traveling the world full time for 8 years now.",
        "My wife Intan and I are usually in our second home Bali, but our journeys take us to destinations all over the world.",
        'Please tag along!',
      ],
    },
  };

  return (
    <div className="about">
      <h1 className="about1">
        <span>{aboutData.title}</span>
      </h1>
      <div className="about-section">
        <img className="about-image" src={aboutData.image} alt="About" />
        <div className="about-text">
          <h2 className="about-heading">{aboutData.section.heading}</h2>
          {aboutData.section.description.map((paragraph, index) => (
            <p key={index} className="about-description">
              {paragraph}
            </p>
          ))}
          <button className="read-more-btn1">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
