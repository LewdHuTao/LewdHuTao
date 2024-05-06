'use client'

import { useState } from 'react';

export default function Navbar() {
  const [activeButton, setActiveButton] = useState('#home');

  const handleButtonClick = (hash) => {
    setActiveButton(hash);
    window.location.hash = hash;
  };

  return (
    <nav className="fixed top-0 flex justify-center w-full z-50 drop-shadow-2xl mt-2">
      <div
        id="navbar"
        className="text-base bg-[#404756] md:text-lg lg:text-2xl text-white gap-x-5 md:gap-x-10 mt-3 md:mt-5 lg:mt-8 md:w-1/2 bg-primary rounded-xl px-6 py-2 flex justify-center border-2"
      >
        <button
          className={`px-2 rounded-md hover:text-gray-400 ${activeButton === '#home' ? 'bg-white text-black hover:text-black' : ''}`}
          onClick={() => handleButtonClick('#home')}
        >
          Home
        </button>
        <button
          className={`px-2 rounded-md hover:text-gray-400 ${activeButton === '#about' ? 'bg-white text-black hover:text-black' : ''}`}
          onClick={() => handleButtonClick('#about')}
        >
          About
        </button>
        <button
          className={`px-2 rounded-md hover:text-gray-400 ${activeButton === '#work' ? 'bg-white text-black hover:text-black' : ''}`}
          onClick={() => handleButtonClick('#work')}
        >
          Work
        </button>
        <button
          className={`px-2 rounded-md hover:text-gray-400 ${activeButton === '#contact' ? 'bg-white text-black hover:text-black' : ''}`}
          onClick={() => handleButtonClick('#contact')}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
