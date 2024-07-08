import React from 'react'
import video from '../assets/video.mp4'

const Vid = () => {
  return (
    <div className="bgContainer">
        <div className="overlay"></div>
        <video src={video} autoPlay loop muted />
        <div className="container1">
            <h1 className="wlc">EXPLORE. DREAM. DISCOVER.</h1>
            <h2 className="title">This is a world travel blog featuring beautiful destinations, new experiences, and hidden places around the globe.</h2>
            <h2 className="title1">Please tag alone!</h2>
            <div className='frame'>
                <button class="custom-btn btn-1">START EXPLORING</button>
            </div>
        </div>
    </div>
  )
}

export default Vid;