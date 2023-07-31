// import React from 'react';
import videoBg from '../assets/INDIA Cinematic Travel Video - INDIAN Travel Cultures, Festivals, Beauty - Country of Festivals.mp4';

const VideoBackground = () => {
  return (
    <div className='main video-background' style={{ top: 0, left: 0,}}>
      {/* Set z-index to a negative value to move the VideoBackground backward */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        style={{ width: '100vw', height: '90%' }} // Increase the width to 200%
      />
    </div>
  );
};

export default VideoBackground;
