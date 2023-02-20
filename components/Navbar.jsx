import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, link: "Home", to: "/" },
    { id: 1, link: "About", to: "about" },
    { id: 1, link: "Projects", to: "projects" },
    { id: 1, link: "Skills", to: "skills" },
    { id: 1, link: "Contact", to: "contact" },
  ];
  return (
    <div className="fixed bg-white w-full h-20 shadow-xl z-[100]">
      <div
        className="flex justify-between items-center 
                    w-full h-full px-2"
      >
        <h2 className="sm:text-xl">
          <span className="text-orange-500">OREM</span> GITONGA
        </h2>
        {/* <Image
          src="/../public/assets/orem-gitonga.png"
          alt=""
          width="150"
          height="50"
          style={{ objectFit: "cover" }}
        /> */}
        <div>
          <ul className="hidden md:flex">
            {/* {navItems.map((navItem) => (
              <Link href={`/${navItem.to}`} key={navItem.id}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  {navItem.link}
                </li>
              </Link>
            ))} */}
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Timeline
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Testimonials
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              <h3>
                <span className="text-orange-500">OREM</span> GITONGA
              </h3>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400
                              p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's make the world a better place using tech...
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#about" onClick={handleNav}>
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Timeline</li>
              </Link>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Testimonials</li>
              </Link>
              <Link href="/" onClick={handleNav}>
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40 ">
              <p className="uppercase tracking-widest text-[#5651e5]">
                let's connect
              </p>
              <div
                className="flex items-center justify-between my-4
               w-full sm:w-[80%]"
              >
                <div
                  className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaLinkedinIn />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <FaGithub />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <AiOutlineMail />
                </div>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 
                p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                >
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
