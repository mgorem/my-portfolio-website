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
            Orem Gitonga is a highly skilled software developer with two years
            of experience in JavaScript programming language and its
            environment. I have a passion for building full-stack websites and
            has been actively involved in developing websites for various
            clients.
          </p>
          <p className="p-2 text-gray-600">
            I am a graduate of a reputable university (Multimedia University of
            Kenya) where I studied Mathematics and Computer Science. During my
            time in school, I was actively involved in the school computer
            information technology club where I volunteered as a coach for
            upcoming website developers. My passion for coaching and mentoring
            upcoming developers is evidenced by my dedication to the club, and
            commitment to nurturing talent in the technology space.
          </p>
          <p className="p-2 text-gray-600">
            As a software developer, I am highly proficient in using various
            programming languages and software development tools. My primary
            focus, however, is on JavaScript, and I have a deep understanding of
            its core concepts, including front-end and back-end development, API
            integration, and database management.
          </p>
          <p className="p-2 text-gray-600">
            Over the years, I have worked on several projects, including
            developing custom websites and web applications for various clients.
            I am a firm believer in delivering high-quality work, and his
            attention to detail is second to none. My experience and expertise
            have seen me become a valuable asset to any team I work with.
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
