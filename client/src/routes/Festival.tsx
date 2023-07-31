// import React from 'react';
import VideoBackground from '../components/VideoBackground';

const Festival = () => {
  return (
    <div className="pt-10 flex flex-col ">
      {/* Add padding-top (pt-10) to push the VideoBackground down */}
      <div>
        <VideoBackground />
      </div>
      <div className='text-white flex mb-[20rem]'>
        <div>
          <h4 className="text-5xl font-montserrat font-normal text-[#030244] text-shadow-sm max-w-md pt-5 pl-10" style={{ WebkitTextStroke: '1px white' }}>
            Events & Festivals
          </h4>
          <p className="relative text-2xl font-roboto font-normal leading-7 text-[#fffff0] break-words max-w-4xl pl-10 pr-10 pt-5 pb-5">Step into a world of vibrant celebrations and cultural wonders. India, a land of festivals and fairs, beckons you to experience its incredible charm. With every region, season, and religion offering its unique festivities, there's always something to celebrate. From heartfelt prayers to exchanging goodwill, from adorning new clothes to indulging in traditional sports and feasting, each occasion brings joy and togetherness. Moreover, India's rich tapestry of contemporary events celebrates art, dance, music, food, literature, and sports, adding even more allure to this diverse and captivating nation.</p>
        </div>
        <div className='relative m-auto h-20 '>
          <div className="block max-w-sm p-6 bg-[#030244] border-gray-200 rounded-lg shadow w-fit">
            <div className='flex'>
            <h5 className="text-3xl font-montserrat font-normal text-[#030244] text-shadow-sm max-w-md" style={{ WebkitTextStroke: '1px white' }}>Events & Festivals</h5>
            <h5 className="mb-2 ml-10 text-3xl font-bold tracking-tight text-white">LOGO</h5>
            </div>
            <div>
            <p className="font-normal text-white h-[200px]">data here!! LOL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival;
