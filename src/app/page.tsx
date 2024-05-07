'use client'

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { useEffect } from "react";
import initAOS from "../utils/aos";
import Navbar from "../components/Navbar";
import Background from "../public/bg.jpg";
import AboutBackground from "../public/about_bg.jpg";
import ghIcon from "../public/github.svg";
import dcIcon from "../public/discord.svg";
import emIcon from "../public/email.svg";
import P1 from "../public/project1.jpg";
import P2 from "../public/project2.jpg";

export default function Home() {
  useEffect(() => {
    initAOS();
  });

  return (
    <div className="select-none relative pb-10">
      <Navbar />

      <div className=" relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${Background.src})` }}>
        <svg className="w-full absolute -bottom-1 h-auto fill-background" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1457 1C865.451 127.15 537.208 170.807 -17 1V179H1457V1Z" fill="#1A2435" stroke="#1A2435"></path></svg>
        <section id="home" className="backdrop-brightness-50 relative flex flex-col items-center justify-center pt-60 pb-72 text-white text-center">
          <div>
            <h1 className="font-bold text-5xl">
              Hi, I'm <a className="text-[#5454D5]">LewdHuTao</a>
            </h1>
            <h2 className="font-bold text-3xl text-white mt-2">
              <Typewriter
                options={{
                  strings: [
                    "A Discord Bot Developer",
                    "A Full-Stack Web Developer"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>

            <div className="grid-rows-3 mt-8">
              <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                <Image alt="gh-icon" src={ghIcon} width={24} height={24} />
              </button>

              <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                <Image alt="dc-icon" src={dcIcon} width={24} height={24} />
              </button>

              <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                <Image alt="em-icon" src={emIcon} width={24} height={24} />
              </button>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 mt-36">
  <div className="flex flex-col lg:flex-row justify-center lg:justify-end">
  <div className="lg:hidden flex justify-center">
      <Image
        data-aos="zoom-in"
        className="rounded-xl border-4 border-[#404756]"
        alt="about-bg"
        src={AboutBackground}
      />
    </div>
    <div className="flex flex-col text-white mx-16 justify-self-center lg:justify-self-start mt-10"> 
      <h1 data-aos="fade-right" className="text-white underline underline-offset-8 text-4xl">
        About Me
      </h1>
      <p data-aos="fade-up" className="text-white text-xl mt-10">
        Hi, I'm LewdHuTao, an 18-year-old from Malaysia. When I'm not hanging out, you'll find me behind a screen, tinkering with code. JavaScript is my favorite language, and I'm passionate about creating awesome Discord bots and diving into full-stack web development.
      </p>
      <p data-aos="fade-up" className="text-white text-xl mt-20">
        Want to reach me? I'm most active on Discord, so feel free to reach out to me there!
      </p>
    </div>
    <div className="hidden lg:flex lg:absolute right-40 lg:justify-self-center">
      <Image
        data-aos="zoom-in"
        className="rounded-xl border-4 border-[#404756]"
        alt="about-bg"
        src={AboutBackground}
      />
    </div>
  </div>
</section>




      <section id="work" className="flex flex-col justify-center items-center mx-8">
            <div className="mt-60">
              <h1 data-aos="zoom-in" className="text-white text-5xl font-bold text-center">My Projects</h1>
              <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P1} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Shittybot
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P2} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Lavalink-Status
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P2} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Lavalink-Status
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>

              </div>

              <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P1} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Shittybot
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P2} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Lavalink-Status
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>

                <div className="bg-[#080C11] rounded-xl mx-12 my-5 pb-5">
                  <Image className="rounded-t-xl" alt="project1" src={P2} width={935} height={468} />
                  <p className="text-white text-xl mt-5 mx-3 font-semibold">
                    Lavalink-Status
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                      A Music streaming service through Discord, multiplatform support ! Spotify, Youtube, Soundcloud and many more ! used by 1M peoples across the world !
                    </p>
                </div>
                
              </div>
            </div>
      </section>
    </div>
  );
}
