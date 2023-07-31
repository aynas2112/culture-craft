// import React from 'react';

const About = () => {
  return (
    <div className="relative mt-8">
      <h2 className="absolute top-20 left-1/2 transform -translate-x-1/2 font-montserrat font-normal text-6xl text-center text-white text-shadow-md" style={{ WebkitTextStroke: '2px #030244' }}>
  About
</h2>

      <h4 className="relative text-5xl top-40 left-20 font-montserrat font-normal text-[#030244] text-shadow-sm max-w-md" style={{ WebkitTextStroke: '1px white' }}>
        Cultural Odyssey
      </h4>

      <p className="relative text-2xl top-48 left-20 font-roboto font-normal leading-7 text-[#fffff0] break-words max-w-4xl">
        A vibrant online platform that celebrates the rich and diverse cultural heritage of India. Immerse yourself in the fascinating tapestry of traditions, art, music, festivals, cuisine, and more as we take you on a captivating journey through the vibrant colors and enchanting stories that define this incredible land. Uncover the beauty of India's past, present, and future, all in one place.
      </p>

      <h2 className="relative top-56 left-1/2 transform -translate-x-1/2 font-montserrat font-normal text-6xl text-center text-white text-shadow-md" style={{ WebkitTextStroke: '2px #030244' }}>
        The Brains Behind the Magic!
      </h2>

      <div className="flex justify-center space-x-10 mt-48">
  <div className="flex flex-col items-center mt-20">
    <img src="/src/assets/akshat.png" alt="" className="w-40 h-40 object-cover rounded-full"/>
    <p className="mt-2" style={{ color: '#030244', WebkitTextStroke: '0.1px white' }}>Akshat Sharma</p>
  </div>
  <div className="flex flex-col items-center mt-20">
    <img src="/src/assets/harsh.png" alt="" className="w-40 h-40 object-cover rounded-full"/>
    <p className="mt-2" style={{ color: '#030244', WebkitTextStroke: '0.1px white' }}>Harsh Deepanshu</p>
  </div>
  <div className="flex flex-col items-center mt-20">
    <img src="/src/assets/saksham.png" alt="" className="w-40 h-40 object-cover rounded-full"/>
    <p className="mt-2" style={{ color: '#030244', WebkitTextStroke: '0.1px white' }}>Saksham Kathuria</p>
  </div>
  <div className="flex flex-col items-center mt-20">
    <img src="/src/assets/sanya.png" alt="" className="w-40 h-40 object-cover rounded-full"/>
    <p className="mt-2" style={{ color: '#030244', WebkitTextStroke: '0.1px white' }}>Sanya Chawla</p>
  </div>
</div>




    </div>
  );
};

export default About;
