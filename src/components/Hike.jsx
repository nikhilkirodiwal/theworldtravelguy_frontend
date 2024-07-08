// import React from 'react'
// import './Hike.css'
// import hike1 from '../assets/hike1.png'
// import hike2 from '../assets/hike2.png'
// import hike3 from '../assets/hike3.png'
// import hike4 from '../assets/hike4.png'
// import hike5 from '../assets/hike5.png'
// import hike6 from '../assets/hike6.png'
// import hike7 from '../assets/hike7.png'
// import hike8 from '../assets/hike8.png'
// import hike9 from '../assets/hike9.png'
// import hike10 from '../assets/hike10.png'
// import hike11 from '../assets/hike11.png'
// import hike12 from '../assets/hike12.png'
// import hike13 from '../assets/hike13.png'
// import hike14 from '../assets/hike14.png'
// import hike15 from '../assets/hike15.png'
// import hike16 from '../assets/hike16.png'
// import hike17 from '../assets/hike17.jpg'
// import hike18 from '../assets/hike18.jpg'


// const Hike = () => {
//   return (
//     <div className="hike">
//         <h1 className='hik'><span>HIKES</span></h1>
//         <h2 className='hike1'>Bucket list hicking guides</h2>

//             {/* Small images with descriptions */}
//     <div className="hike-desc">
//       <section className="section1">
//       <div className="hike-item">
//         <img className='hikeimg' src={hike1} alt="" />
//         <p>EVEREST BASE CAMP TREK IN NEPAL</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike2} alt="" />
//         <p>ANGELS LANDING HIKE IN ZION</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike3} alt="" />
//         <p>HUAYNA PICCHU HIKE IN PERU</p>
//       </div>
//       </section>
      
//       <section className='section2'>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike4} alt="" />
//         <p>25 BEST HIKES IN INDONESIA</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike5} alt="" />
//         <p>TONGARIRO CROSSING IN NEW ZEALAND</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike6} alt="" />
//         <p>TIGER'S NEST MONASTERY HIKE IN BHUTAN</p>
//       </div>
//       </section>

//       <section className='section3'>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike7} alt="" />
//         <p>26 BEST HIKES IN OAHU HAWAII</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike8} alt="" />
//         <p>18 BEST SLOT CANYONS IN UTAH</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike9} alt="" />
//         <p>STAIRWAY TO HEAVEN HIKE IN HAWAII</p>
//       </div>
//       </section>
//     </div>

//     <div className="container3">
//       <section className="section4">
//       <div className="hike-item">
//         <img className='hikeimg' src={hike10} alt="" />
//         <p>MOUNT FITZ ROY HIKE IN PATAGONIA</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike11} alt="" />
//         <p>MOUNT BROMO CRATER IN INDONESIA</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike12} alt="" />
//         <p>KAWAH IJEN VOLCANIC LAKE IN JAVA</p>
//       </div>
//       </section>

//       <section className='section5'>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike13} alt="" />
//         <p>PERITO MORENO GLACIER WALK</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike14} alt="" />
//         <p>ACATENANGO VOLCANO HIKE IN GUATEMALA</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike15} alt="" />
//         <p>HALF DOME HIKE IN YOSEMITE</p>
//       </div>
//       </section>

//       <section className='section6'>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike16} alt="" />
//         <p>HOW TO VISIT THE BALI MONKEY FOREST</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike17} alt="" />
//         <p>OFBEAT PLACES TO VISIT IN AUSTRALIA</p>
//       </div>
//       <div className="hike-item">
//         <img className='hikeimg' src={hike18} alt="" />
//         <p>BEST THINGS TO DO IN MEDELLIN, COLOMBIA</p>
//       </div>
//       </section>
//     </div>

     
//     </div>
//   )
// }

// export default Hike

import React from 'react';
import './Hike.css';
import hike1 from '../assets/hike1.png';
import hike2 from '../assets/hike2.png';
import hike3 from '../assets/hike3.png';
import hike4 from '../assets/hike4.png';
import hike5 from '../assets/hike5.png';
import hike6 from '../assets/hike6.png';
import hike7 from '../assets/hike7.png';
import hike8 from '../assets/hike8.png';
import hike9 from '../assets/hike9.png';
import hike10 from '../assets/hike10.png';
import hike11 from '../assets/hike11.png';
import hike12 from '../assets/hike12.png';
import hike13 from '../assets/hike13.png';
import hike14 from '../assets/hike14.png';
import hike15 from '../assets/hike15.png';
import hike16 from '../assets/hike16.png';
import hike17 from '../assets/hike17.jpg';
import hike18 from '../assets/hike18.jpg';

const hikes = [
  { src: hike1, title: 'EVEREST BASE CAMP TREK IN NEPAL' },
  { src: hike2, title: 'ANGELS LANDING HIKE IN ZION' },
  { src: hike3, title: 'HUAYNA PICCHU HIKE IN PERU' },
  { src: hike4, title: '25 BEST HIKES IN INDONESIA' },
  { src: hike5, title: 'TONGARIRO CROSSING IN NEW ZEALAND' },
  { src: hike6, title: 'TIGER\'S NEST MONASTERY HIKE IN BHUTAN' },
  { src: hike7, title: '26 BEST HIKES IN OAHU HAWAII' },
  { src: hike8, title: '18 BEST SLOT CANYONS IN UTAH' },
  { src: hike9, title: 'STAIRWAY TO HEAVEN HIKE IN HAWAII' },
  { src: hike10, title: 'MOUNT FITZ ROY HIKE IN PATAGONIA' },
  { src: hike11, title: 'MOUNT BROMO CRATER IN INDONESIA' },
  { src: hike12, title: 'KAWAH IJEN VOLCANIC LAKE IN JAVA' },
  { src: hike13, title: 'PERITO MORENO GLACIER WALK' },
  { src: hike14, title: 'ACATENANGO VOLCANO HIKE IN GUATEMALA' },
  { src: hike15, title: 'HALF DOME HIKE IN YOSEMITE' },
  { src: hike16, title: 'HOW TO VISIT THE BALI MONKEY FOREST' },
  { src: hike17, title: 'OFBEAT PLACES TO VISIT IN AUSTRALIA' },
  { src: hike18, title: 'BEST THINGS TO DO IN MEDELLIN, COLOMBIA' }
];

const Hike = () => {
  return (
    <div className="hike">
      <h1 className='hik'><span> HIKES </span></h1>
      <h2 className='hike1'>Bucket list hiking guides</h2>

      {/* Small images with descriptions */}
      <div className="hike-desc">
        {hikes.map((hike, index) => (
          <div className="hike-item" key={index}>
            <img className='hikeimg' src={hike.src} alt="" />
            <p>{hike.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hike;
