import Image from "next/image";
import React from "react";
import profilePhoto from "../assets2/portfolio-profile.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen 
    p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[orangered]">
            About
          </p>
          <h2 className="py-4">More about the programmer...😉️</h2>
          <p className="p-2 text-gray-600">
            <b>"I really love to code on google docs."</b>
          </p>
          <p className="p-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sunt iste earum incidunt molestias dolorem omnis tempora modi sequi
            libero. Ipsa necessitatibus minima atque molestiae provident nulla,
            culpa quibusdam quod.
          </p>
          <p className="p-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            aperiam laudantium debitis adipisci, perferendis dolor saepe at
            officiis nisi eius. Quam hic accusantium, maiores tempora minima
            animi sequi dignissimos blanditiis!
          </p>
          <p className="p-2 text-gray-600 underline cursor-pointer">
            <a href="https://github.com/mgorem">
              Check out My Projects on Github
            </a>
          </p>
        </div>
        <div
          className="w-full h-auto m-auto shadow-xl shadow-gray-600 
        rounded-xl flex items-center justify-center p-2
        ease-in duration-500"
        >
          <Image
            className="rounded-xl"
            src={profilePhoto}
            width={300}
            height={125}
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
