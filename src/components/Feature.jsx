// import React from 'react'
// import './Feature.css'
// import feature1 from '../assets/feature1.png'
// import feature2 from '../assets/feature2.png'
// import feature3 from '../assets/feature3.png'
// import feature4 from '../assets/feature4.png'
// import feature5 from '../assets/feature5.png'
// import feature6 from '../assets/feature6.png'
// import feature7 from '../assets/feature7.png'
// import feature8 from '../assets/feature8.png'
// import feature9 from '../assets/feature9.png'

// const Feature = () => {
//   return (
//     <div className="container2">
//     <h1 className='feat'><span>FEATURE</span></h1>

//     {/* Main images section */}
//     <div className="main-images">
//       <img src={feature1} alt="Feature 1" />
//       <img src={feature2} alt="Feature 2" />
//       <img src={feature3} alt="Feature 3" />
//       <img src={feature4} alt="Feature 4" />
//       <img src={feature5} alt="Feature 5" />
//     </div>

//     {/* Small images with descriptions */}
//     <div className="container3">
//       <div className="feature-item">
//         <img className='featimg' src={feature6} alt="Travel Blog" />
//         <p>Travel Blog</p>
//       </div>
//       <div className="feature-item">
//         <img className='featimg' src={feature7} alt="Destination" />
//         <p>Destination</p>
//       </div>
//       <div className="feature-item">
//         <img className='featimg' src={feature8} alt="About" />
//         <p>About</p>
//       </div>
//     </div>

//     {/* Big images with descriptions */}
//     <div className="container4">
//         <div className="feature-item1">
//             <img className='featimg1' src={feature9} alt="" />
//             <h1 className='text'>Thanks For Looking!</h1>
//             <h2 className='text1'>I'm David Leiter, the guy behind this website. I'm an American who's been traveling the world full time for 8 years now.</h2>
//             <h2 className='text1'>I started this travel blog in 2019 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.</h2>    
//             <h2 className='text1'>I'm currently based in Bali, Indonesia, where I met my wife Intan, who's a Bali local. Now she joins me on these wild and crazy adventures too.</h2>
//             <h2 className='text1'>Together, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited some spectacular castles, temples, and monuments around the world.</h2>
//             <h2 className='text1'>I've worked with and been featured by BBC Travel, NBC News, Time, and other companies.</h2>
//             <h2 className='text1'>I haven't been everywhere, but it's on my list. I hope this world travel blog can help and inspire you in your own journeys as well!</h2>
//             <button className="read-more-btn">Read more</button>
//         </div>
//     </div> 
//   </div>
//   )
// }

// export default Feature

import React from 'react';
import './Feature.css';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import feature4 from '../assets/feature4.png';
import feature5 from '../assets/feature5.png';
import feature6 from '../assets/feature6.png';
import feature7 from '../assets/feature7.png';
import feature8 from '../assets/feature8.png';
import feature9 from '../assets/feature9.png';

const features = [
  { image: feature1, alt: 'Feature 1', description: 'Description for Feature 1' },
  { image: feature2, alt: 'Feature 2', description: 'Description for Feature 2' },
  { image: feature3, alt: 'Feature 3', description: 'Description for Feature 3' },
  { image: feature4, alt: 'Feature 4', description: 'Description for Feature 4' },
  { image: feature5, alt: 'Feature 5', description: 'Description for Feature 5' },
  { image: feature6, alt: 'Feature 6', description: 'Travel Blog' },
  { image: feature7, alt: 'Feature 7', description: 'Destination' },
  { image: feature8, alt: 'Feature 8', description: 'About' },
  { image: feature9, alt: 'Feature 9', description: 'Thanks For Looking!' }
];

const Feature = () => {
  return (
    <div className="container2">
      <h1 className='feat'><span>FEATURE</span></h1>

      {/* Main images section */}
      <div className="main-images">
        {features.slice(0, 5).map((feature, index) => (
          <img key={index} src={feature.image} alt={feature.alt} />
        ))}
      </div>

      {/* Small images with descriptions */}
      <div className="container3">
        {features.slice(5, 8).map((feature, index) => (
          <div key={index} className="feature-item">
            <img className='featimg' src={feature.image} alt={feature.alt} />
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Big image with description */}
      <div className="container4">
        <div className="feature-item1">
          <img className='featimg1' src={feature9} alt={features[8].alt} />
          <h1 className='text'>{features[8].description}</h1>
          <h2 className='text1'>
            I'm David Leiter, the guy behind this website. I'm an American who's been traveling the world full time for 8 years now.
          </h2>
          <h2 className='text1'>
          I started this travel blog in 2019 to document my own international trips, share my photos, and help others learn how to travel the world and find some really good spots off the beaten path.
          </h2>
          <h2 className='text1'>
          I'm currently based in Bali, Indonesia, where I met my wife Intan, who’s a Bali local. Now she joins me on these wild and crazy adventures too.
          </h2>
          <h2 className='text1'>
          Together, we've done some bucket list hikes, climbed active volcanoes, seen exotic wildlife, and visited some spectacular castles, temples, and monuments around the world.
          </h2>
          <h2 className='text1'>
          I've worked with and been featured by BBC Travel, NBC News, Time, and other companies.
          </h2>
          <h2 className='text1'>
          I haven’t been everywhere, but it’s on my list. I hope this world travel blog can help and inspire you in your own journeys as well!
          </h2>
          {/* Additional text goes here */}
          <button className="read-more-btn">Read more</button>
        </div>
      </div>
    </div>
  );
}

export default Feature;

