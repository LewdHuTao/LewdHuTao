'use client'

import Image from "next/image";
import Typewriter from "typewriter-effect";
import Navbar from "../components/Navbar";
import Background from "../public/bg.jpg";
import ghIcon from "../public/github.svg";
import dcIcon from "../public/discord.svg";
import emIcon from "../public/email.svg";

export default function Home() {
  return (
    <div className="select-none relative">
      <Navbar />

      <div className=" relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${Background.src})` }}>
        <svg className="w-full absolute -bottom-1 h-auto fill-background" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1457 1C865.451 127.15 537.208 170.807 -17 1V179H1457V1Z" fill="#1A2435" stroke="#1A2435"></path></svg>
        <section className="backdrop-brightness-50 relative flex flex-col items-center justify-center pt-60 pb-72 text-white text-center">
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

      <section className="flex flex-col">
                <div className="text-white">
                  About Me
                </div>
      </section>
    </div>
  );
}
