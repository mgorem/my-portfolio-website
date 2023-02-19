import React from "react";
import Image from "next/image";

const Navbar = () => {
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
      </div>
    </div>
  );
};

export default Navbar;
