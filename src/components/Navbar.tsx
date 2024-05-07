import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeButton, setActiveButton] = useState('#home');

  const checkActiveSection = () => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;
      const sectionTop = sectionElement.offsetTop;
      const sectionHeight = sectionElement.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
        setActiveButton(`#${section.id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkActiveSection);
    return () => {
      window.removeEventListener('scroll', checkActiveSection);
    };
  }, []);

  const handleButtonClick = (hash, event) => {
    setActiveButton(hash);
    const targetSection = document.querySelector(hash);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    event.preventDefault();
  };


  return (
    <nav className="fixed top-0 flex justify-center w-full z-50 drop-shadow-2xl mt-2">
      <div
        id="navbar"
        className="text-base bg-[#404756] md:text-lg lg:text-2xl text-white gap-x-5 md:gap-x-10 mt-3 md:mt-5 lg:mt-8 md:w-1/2 bg-primary rounded-xl px-6 py-2 flex justify-center border-2"
      >
        <button
          className={`px-2 rounded-md hover:text-black hover:bg-white ${activeButton === '#home' ? 'bg-white text-black focus:hover:text-black' : ''}`}
          onClick={(event) => handleButtonClick('#home', event)}
        >
          Home
        </button>
        <button
          className={`px-2 rounded-md hover:text-black hover:bg-white ${activeButton === '#about' ? 'bg-white text-black hover:focus:text-black' : ''}`}
          onClick={(event) => handleButtonClick('#about', event)}
        >
          About
        </button>
        <button
          className={`px-2 rounded-md hover:text-black hover:bg-white ${activeButton === '#work' ? 'bg-white text-black hover:focus:text-black' : ''}`}
          onClick={(event) => handleButtonClick('#work', event)}
        >
          Work
        </button>
        <button
          className={`px-2 rounded-md hover:text-black hover:bg-white ${activeButton === '#contact' ? 'bg-white text-black hover:focus:text-black' : ''}`}
          onClick={(event) => handleButtonClick('#contact', event)}
        >
          Contact
        </button>
      </div>
    </nav>
  );
}
