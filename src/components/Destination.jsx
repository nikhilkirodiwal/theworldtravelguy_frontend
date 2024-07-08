// import React from 'react'
// import './Destination.css'
// import destination1 from '../assets/destination1.png'
// import destination2 from '../assets/destination2.png'
// import destination3 from '../assets/destination3.png'
// import destination4 from '../assets/destination4.png'
// import destination5 from '../assets/destination5.png'
// import destination6 from '../assets/destination6.png'
// import destination7 from '../assets/destination7.png'
// import destination8 from '../assets/destination8.png'
// import destination9 from '../assets/destination9.png'

// const Destination
//  = () => {
//   return (
//     <div className="destination">
//         <h1 className="dest"><span>DESTINATIONS</span></h1>
//         <h2 className='destination1'>Pick a contry and start exploring!</h2>
//             {/* Small images with descriptions */}
//     <div className="destination_desc">
//       <div className="section1">
//       <div className="destination-item">
//         <img className='destinationimg' src={destination1} alt="" />
//         <p>EGYPT</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination2} alt="" />
//         <p>INDONESIA</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination3} alt="" />
//         <p>JAPAN</p>
//       </div>
//       </div>
      
//       <div className='section2'>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination4} alt="" />
//         <p>UNITED STATES</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination5} alt="" />
//         <p>PHILIPPINES</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination6} alt="" />
//         <p>THAILAND</p>
//       </div>
//       </div>

//       <div className='section3'>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination7} alt="" />
//         <p>GREECE</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination8} alt="" />
//         <p>UNITED ARAB EMIRATES</p>
//       </div>
//       <div className="destination-item">
//         <img className='destinationimg' src={destination9} alt="" />
//         <p>LAOS</p>
//       </div>
//       </div>
//     </div>

//     <div className="container6">
//     <button className="read-more-btn2">MORE DESTINATIONS</button>
//     </div>
//     </div>
//   )
// }

// export default Destination


import React from 'react';
import './Destination.css';
import destination1 from '../assets/destination1.png';
import destination2 from '../assets/destination2.png';
import destination3 from '../assets/destination3.png';
import destination4 from '../assets/destination4.png';
import destination5 from '../assets/destination5.png';
import destination6 from '../assets/destination6.png';
import destination7 from '../assets/destination7.png';
import destination8 from '../assets/destination8.png';
import destination9 from '../assets/destination9.png';

const Destination = () => {
  const destinations = [
    { image: destination1, title: 'EGYPT' },
    { image: destination2, title: 'INDONESIA' },
    { image: destination3, title: 'JAPAN' },
    { image: destination4, title: 'UNITED STATES' },
    { image: destination5, title: 'PHILIPPINES' },
    { image: destination6, title: 'THAILAND' },
    { image: destination7, title: 'GREECE' },
    { image: destination8, title: 'UNITED ARAB EMIRATES' },
    { image: destination9, title: 'LAOS' },
  ];

  return (
    <div className="destination">
      <h1 className="dest"><span>DESTINATIONS</span></h1>
      <h2 className='destination1'>Pick a country and start exploring!</h2>
      <div className="destination_desc">
        <div className="destsection1">
          {destinations.slice(0, 3).map((destination, index) => (
            <div key={index} className="destination-item">
              <img className='destinationimg' src={destination.image} alt={destination.title} />
              <p>{destination.title}</p>
            </div>
          ))}
        </div>

        <div className='destsection2'>
          {destinations.slice(3, 6).map((destination, index) => (
            <div key={index} className="destination-item">
              <img className='destinationimg' src={destination.image} alt={destination.title} />
              <p>{destination.title}</p>
            </div>
          ))}
        </div>

        <div className='destsection3'>
          {destinations.slice(6, 9).map((destination, index) => (
            <div key={index} className="destination-item">
              <img className='destinationimg' src={destination.image} alt={destination.title} />
              <p>{destination.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container6">
        <button className="read-more-btn2">MORE DESTINATIONS</button>
      </div>
    </div>
  );
};

export default Destination;
