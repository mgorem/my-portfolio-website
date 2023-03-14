import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div
        className="max-w-[1240px] w-full h-full 
      mx-auto p-2 flex justify-center items-center"
      >
        <div>
          <p
            className="uppercase text-sm tracking-widest 
          text-gray-600"
          >
            Let's make the world a better place by building exceptional
            software...
          </p>
          <h1 className="py-4 text-gray-700">
            Hello, I'm <span className="text-[orangered]">Orem</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Software Engineer.</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I am a passionate software developer with a knack for building (and
            ocassionally designing) exceptional digital experiences, coaching
            and mentoring upcoming developers. I am highly skilled in using
            various programming languages and software development tools, with a
            focus on JavaScript. My experience in building full-stack websites
            and developing web applications makes me an invaluable asset to any
            team I work with. Currently, I'm focused on building responsive
            front-end web applications, integrating back-end technologies,
            researching more on the best emerging technologies:
            <span>
              <b>Artificial Intelligence and Blockchain</b>
            </span>{" "}
            practices for web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/orem-gitonga-b37b9319b/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/mgorem"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link
              href="mailto:oremgitonga22@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
