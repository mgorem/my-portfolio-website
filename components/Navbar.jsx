import React from "react";
// import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const navItems = [
    { id: 1, link: "Home", to: "/" },
    { id: 1, link: "About", to: "about" },
    { id: 1, link: "Projects", to: "projects" },
    { id: 1, link: "Skills", to: "skills" },
    { id: 1, link: "Contact", to: "contact" },
  ];
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div
        className="flex justify-between items-center 
                    w-full h-full px-2"
      >
        <h2>
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
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
        <div
          className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%]
                        h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
        >
          <div>
            <div className=" flex w-full items-center justify-between">
              <h3>
                <span className="text-orange-500">OREM</span> GITONGA
              </h3>
              <div>
                <AiOutlineClose />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
