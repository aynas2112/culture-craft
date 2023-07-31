import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [homeIcon, setHomeIcon] = useState('');
  const [festivalsIcon, setFestivalsIcon] = useState('');
  const [yogaIcon, setYogaIcon] = useState('');
  const [sareeIcon, setSareeIcon] = useState('');
  const [aboutIcon, setAboutIcon] = useState('');

  const handleNav = () => {
    setNav(!nav);
  };

  // Load the icons asynchronously
  React.useEffect(() => {
    import('../assets/home.png').then((icon) => setHomeIcon(icon.default));
    import('../assets/party-ornament.png').then((icon) => setFestivalsIcon(icon.default));
    import('../assets/exercise.png').then((icon) => setYogaIcon(icon.default));
    import('../assets/saree.png').then((icon) => setSareeIcon(icon.default));
    import('../assets/about.png').then((icon) => setAboutIcon(icon.default));
  }, []);

  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className='absolute top-4 right-4 z-[99] md:hidden' />
      {nav ? (
        <div className='fixed w-full h-screen bg-[#fffff0] flex flex-col justify-center items-center z-20'>
          <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030244] text-white m-2 p-4 hover:scale-110 ease-in duration-200'>
            {homeIcon && <img src={homeIcon} alt="Home" className="w-6 h-6 mr-2" />}
            <span className='pl'>Home</span>
          </a>
          <a href="#festivals" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030244] text-white m-2 p-4 hover:scale-110 ease-in duration-200'>
            {festivalsIcon && <img src={festivalsIcon} alt="Festivals" className="w-6 h-6 mr-2" />}
            <span className='pl'>Festivals</span>
          </a>
          <a href="#yoga" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030244] text-white m-2 p-4 hover:scale-110 ease-in duration-200'>
            {yogaIcon && <img src={yogaIcon} alt="Yoga" className="w-6 h-6 mr-2" />}
            <span className='pl'>Yoga</span>
          </a>
          <a href="#saree" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030244] text-white m-2 p-4 hover:scale-110 ease-in duration-200'>
            {sareeIcon && <img src={sareeIcon} alt="Saree" className="w-6 h-6 mr-2" />}
            <span className='pl'>Saree</span>
          </a>
          <a href="#about" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-[#030244] text-white m-2 p-4 hover:scale-110 ease-in duration-200'>
            {sareeIcon && <img src={aboutIcon} alt="Saree" className="w-6 h-6 mr-2" />}
            <span className='pl'>About</span>
          </a>
        </div>
      ): (
        <div className='hidden md:flex justify-center items-center p-4 bg-[#030244] w-1/2 rounded-full md:translate-y-10 md:mx-auto'>
          <div className='group-8'>
            <div className='rectangle-2 flex gap-10 md:gap-20'>
              <div className="home-1">
                <a href="#main">
                  {homeIcon && <img src={homeIcon} alt="Home" className="w-6 h-6 rounded-full hover:bg-[#D9D9D9] hover:bg-opacity-50" />}
                </a>
              </div>
              <div className="party-ornament-1">
                <a href="#festivals">
                  {festivalsIcon && <img src={festivalsIcon} alt="Festivals" className="w-6 h-6 rounded-full hover:bg-[#D9D9D9] hover:bg-opacity-50" />}
                </a>
              </div>
              <div className="exercise-1">
                <a href="#yoga">
                  {yogaIcon && <img src={yogaIcon} alt="Yoga" className="w-6 h-6 rounded-full hover:bg-[#D9D9D9] hover:bg-opacity-50" />}
                </a>
              </div>
              <div className="saree-1">
                <a href="#saree">
                  {sareeIcon && <img src={sareeIcon} alt="Saree" className="w-6 h-6 rounded-full hover:bg-[#D9D9D9] hover:bg-opacity-50" />}
                </a>
              </div>
              <div className="about-1">
                <a href="#about">
                  {aboutIcon && <img src={aboutIcon} alt="About" className="w-6 h-6 rounded-full hover:bg-[#D9D9D9] hover:bg-opacity-50" />}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
