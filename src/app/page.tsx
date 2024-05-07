'use client'

import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import initAOS from "../utils/aos"
import githubHooks from "../hooks/githubHooks";
import Navbar from "../components/Navbar";
import Background from "../public/bg.jpg";
import AboutBackground from "../public/about_bg.jpg";
import ghIcon from "../public/github.svg";
import ghForksIcon from "../public/git_fork.svg";
import ghStarsIcon from "../public/git_star.svg";
import dcIcon from "../public/discord.svg";
import emIcon from "../public/email.svg";
import P1 from "../public/project1.jpg";
import P2 from "../public/project2.jpg";
import P3 from "../public/project3.jpg";
import P4 from "../public/project4.jpg";
import P5 from "../public/project5.jpg";
import P6 from "../public/project6.jpg";
import Footer from "../components/Footer";

export default function Home() {

  const [forks1, setForks1] = useState(null);
  const [stargazers1, setStargazers1] = useState(null);

  const [forks2, setForks2] = useState(null);
  const [stargazers2, setStargazers2] = useState(null);

  const [forks3, setForks3] = useState(null);
  const [stargazers3, setStargazers3] = useState(null);

  const [forks4, setForks4] = useState(null);
  const [stargazers4, setStargazers4] = useState(null);

  const [forks5, setForks5] = useState(null);
  const [stargazers5, setStargazers5] = useState(null);

  const [forks6, setForks6] = useState(null);
  const [stargazers6, setStargazers6] = useState(null);

  const repositories = [
    { owner: "lewdhutao", name: "shittybot" },
    { owner: "lewdhutao", name: "lewdhutao" },
    { owner: "shittybot", name: "lavalink-status" },
    { owner: "shittybot", name: "songcard" },
    { owner: "shittybot", name: "niizuki" },
    { owner: "lewdhutao", name: "arduino-smartdoor" },
  ];

  useEffect(() => {
    const fetchRepositoryData = async () => {
      repositories.forEach(async (repo, index) => {
        const data = await githubHooks(repo.owner, repo.name);
        if (index === 0) {
          setStargazers1(data.stargazers);
          setForks1(data.forks);
        } else if (index === 1) {
          setStargazers2(data.stargazers);
          setForks2(data.forks);
        } else if (index === 2) {
          setStargazers3(data.stargazers);
          setForks3(data.forks);
        } else if (index === 3) {
          setStargazers4(data.stargazers);
          setForks4(data.forks);
        } else if (index === 4) {
          setStargazers5(data.stargazers);
          setForks5(data.forks);
        } else if (index === 5) {
          setStargazers6(data.stargazers);
          setForks6(data.forks);
        }
      });
    };

    fetchRepositoryData();

    initAOS();
  }, []);

  return (
    <div className="select-none relative">
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
              <Link href="https://github.com/lewdhutao">
                <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                  <Image alt="gh-icon" src={ghIcon} width={24} height={24} />
                </button>
              </Link>

              <Link href="https://discord.com/users/454278022132924417/">
                <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                  <Image alt="dc-icon" src={dcIcon} width={24} height={24} />
                </button>
              </Link>

              <Link href="mailto:lewdhutao@shittybot.xyz">
                <button className="bg-transparent backdrop-blur-sm p-3 mx-2 rounded-md border-2 border-gray-400 hover:scale-110">
                  <Image alt="em-icon" src={emIcon} width={24} height={24} />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <section id="about" className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 mt-36 pb-60">
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
              data-aos="fade-left"
              className="rounded-xl border-4 border-[#404756]"
              alt="about-bg"
              src={AboutBackground}
            />
          </div>
        </div>
      </section>

      <section id="work" className="flex flex-col justify-center items-center mx-8 pb-20">
        <div className="mt-20">
          <h1 data-aos="zoom-in" className="text-white text-5xl font-bold text-center">My Projects</h1>
          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/lewdhutao/shittybot">
                  <Image className="rounded-t-xl" alt="project1" src={P1} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    Shittybot - (Private Work)
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    A Discord Music Bot that supports multiple platforms, including YouTube, Spotify, SoundCloud, and many more! Plus,
                    it offers many cool features, and it's free.
                  </p>
                  <div className="text-white text-base mt-5 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks1} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers1} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/lewdhutao/lewdhutao">
                  <Image className="rounded-t-xl" alt="project1" src={P2} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    LewdHuTao Website
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    A website rewrite using Next.js to bring a new and fresh look to the site.
                  </p>
                  <div className="text-white text-base mt-16 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks2} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers2} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/shittybot/lavalink-status">
                  <Image className="rounded-t-xl" alt="project1" src={P3} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    Lavalink-Status
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    A simple and lightweight Discord bot for monitoring Lavalink through Discord, designed to make your
                    life easier. It provides a lot of information to monitor.
                  </p>
                  <div className="text-white text-base mt-5 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks3} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers3} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

          </div>

          <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/lewdhutao/lewdhutao">
                  <Image className="rounded-t-xl" alt="project1" src={P4} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    Songcard
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    A simple package used to create a songcard when playing music on Discord bot.
                  </p>
                  <div className="text-white text-base mt-16 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks4} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers4} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/shittybot/niizuki">
                  <Image className="rounded-t-xl" alt="project1" src={P5} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    Niizuki - (Private Work)
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    Niizuki is a Lavalink client used in my Discord Music Bot for playing music. This Lavalink client
                    is designed to be simple and lightweight.
                  </p>
                  <div className="text-white text-base mt-10 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks5} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers5} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

            <div className="bg-[#080C11] rounded-xl border-whiter border-2 mx-12 my-5 pb-5 hover:scale-105">
              <button>
                <Link href="https://github.com/lewdhutao/arduino-smartdoor">
                  <Image className="rounded-t-xl" alt="project1" src={P6} width={935} height={468} />
                  <p className="text-white text-left text-xl mt-5 mx-3 font-semibold">
                    Arduino-SmartDoor
                  </p>
                  <p className="text-white text-base mt-10 mx-3">
                    Arduino project for my final year in school. This project was fully written in C++.
                  </p>
                  <div className="text-white text-base mt-20 mx-3">
                    <div className="inline-flex items-center mr-4">
                      <Image alt="gh-forks" className="mt-2" src={ghForksIcon} width={30} height={30} />
                      <h1 className="mt-1">{forks6} Forks</h1>
                    </div>
                    <div className="inline-flex items-center">
                      <Image alt="git-stars" className="mt-3" src={ghStarsIcon} height={30} width={30} />
                      <h1 className="mt-2">{stargazers6} Stars</h1>
                    </div>
                  </div>
                </Link>
              </button>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#1A2435] relative overflow-hidden bg-cover bg-center mt-10 pb-20">
        <svg className="w-full lg:w-auto h-auto lg:h-full" viewBox="0 0 1440 463" fill="#0D121A" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.10352e-05 0H1440C1440 0 2133.5 350 1440 350C746.5 350 349 -36.5 6.10352e-05 350C-349 736.5 6.10352e-05 0 6.10352e-05 0Z" fill="#0D121A" stroke="#0D121A"></path>
        </svg>

        <div data-aos="flip-down" data-aos-duration="800" className="flex flex-col bg-[#0D121A] rounded-xl border-[#5454D5] border-8 p-8 mx-5 sm:mx-10 lg:mx-20">
          <div className="flex flex-col">
            <h1 className="text-white text-center text-4xl mt-[-10px] font-bold">Contact Me</h1>
            <div className="mt-10 mx-3 sm:mx-10 lg:mx-60 text-center">
              <Link href="https://github.com/LewdHuTao/">
                <button className="p-8 bg-[#1D2634] rounded-full bg-opacity-50 mx-2 sm:mx-10">
                  <Image alt="gh-contact" src={ghIcon} width={24} height={24} />
                </button>
              </Link>
              <Link href="https://discord.com/users/454278022132924417/">
                <button className="p-8 bg-[#1D2634] rounded-full bg-opacity-50 mx-2 sm:mx-10">
                  <Image alt="dc-contact" src={dcIcon} width={24} height={24} />
                </button>
              </Link>
              <Link href="mailto:lewdhutao@shittybot.xyz">
                <button className="p-8 bg-[#1D2634] rounded-full bg-opacity-50 mx-2 sm:mx-10">
                  <Image alt="em-contact" src={emIcon} width={24} height={24} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer >
        <Footer />
      </footer>
    </div>
  );
}
