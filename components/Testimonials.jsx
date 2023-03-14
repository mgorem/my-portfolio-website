import React from "react";
import Image from "next/image";
import avatar from "../assets2/avatar1.png";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="max-w-[1240px] w-full h-full 
      mx-auto p-2 flex-col justify-center items-center"
    >
      <p className="uppercase text-xl tracking-widest text-[orangered]">
        Testimonials
      </p>
      <h2>What Other People Say 👌️🤪️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Testimonial 1 */}
        <div
          className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden
         rotate-3 hover:rotate-0 transition duration-200"
        >
          <blockquote className="p-8">
            {/* <h2 className="mb-5 text-orange-500">‟</h2> */}
            <p className="font-bold text-lg">
              "I am extremely satisfied with the software that Orem built for my
              business. The user interface is intuitive and easy to use, and the
              features are exactly what I need to streamline my operations. Orem
              was great to work with and made the whole process smooth and
              efficient. I highly recommend Orem for anyone in need of custom
              software development."
            </p>
          </blockquote>
          <div
            className="flex items-center justify-between px-8 py-4 
          bg-gradient-to-br from-yellow-500 to-orange-500"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-full border-4 w-14 h-14 border-white">
                <Image src={avatar} alt="profile" />
              </div>
              <div className="text-white font-semibold">
                <div>Robinson Nadoro</div>
                <div className="opacity-70">Software Developer</div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial 2 */}
        <div
          className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden
         rotate-1 hover:rotate-0 transition duration-200"
        >
          <blockquote className="p-8">
            {/* <h2 className="mb-5 text-orange-500">‟</h2> */}
            <p className="font-bold text-lg">
              "I have been working with Orem for several years now, and I can
              honestly say that he is one of the best software developers I have
              ever worked with. He is responsive, attentive, and always willing
              to go the extra mile to make sure clients are happy. The software
              he has built for me has been instrumental in the success of my
              business, and I would recommend him to anyone looking for
              top-notch software development services."
            </p>
          </blockquote>
          <div
            className="flex items-center justify-between px-8 py-4 
          bg-gradient-to-br from-blue-900 to-blue-200"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-full border-4 w-14 h-14 border-white">
                <Image src={avatar} alt="profile" />
              </div>
              <div className="text-white font-semibold">
                <div>Josef and Jane Forderer</div>
                <div className="opacity-70">Owner - JaneJosef Web App</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden
         rotate-3 hover:rotate-0 transition duration-200"
        >
          <blockquote className="p-8">
            {/* <h2 className="mb-5 text-orange-500">‟</h2> */}
            <p className="font-bold text-lg">
              "I had a complex software problem that I had been trying to solve
              for months, but Orem was able to come up with a solution quickly
              and efficiently. The software he built for me is fast, reliable,
              and has exceeded my expectations in every way. I am so grateful
              for your expertise and professionalism. I would definitely
              recommend Orem to anyone looking for high-quality software
              development."
            </p>
          </blockquote>
          <div
            className="flex items-center justify-between px-8 py-4 
          bg-gradient-to-br from-red-900 to-red-300"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-full border-4 w-14 h-14 border-white">
                <Image src={avatar} alt="profile" />
              </div>
              <div className="text-white font-semibold">
                <div>Kenneth Mbindyo</div>
                <div className="opacity-70">Owner - Outsourcing App</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial 4 */}
        {/* <div
          className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden
         rotate-1 hover:rotate-0 transition duration-200"
        >
          <blockquote className="p-8">
            <h2 className="mb-5 text-orange-500">‟</h2>
            <p className="font-bold text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              molestias eius quod est reiciendis.
            </p>
          </blockquote>
          <div
            className="flex items-center justify-between px-8 py-4 
          bg-gradient-to-br from-green-900 to-green-300"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-full border-4 w-14 h-14 border-white">
                <Image src="" alt="profile" />
              </div>
              <div className="text-white font-semibold">
                <div>Muriithi Gitonga</div>
                <div className="opacity-70">Software Developer</div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Testimonial 5 */}
        {/* <div
          className="bg-gray-300 rounded-2xl shadow-lg overflow-hidden
         rotate-3 hover:rotate-0 transition duration-200"
        >
          <blockquote className="p-8">
            <h2 className="mb-5 text-orange-500">‟</h2>
            <p className="font-bold text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. In
              molestias eius quod est reiciendis.
            </p>
          </blockquote>
          <div
            className="flex items-center justify-between px-8 py-4 
          bg-gradient-to-br from-yellow-500 to-orange-500"
          >
            <div className="flex items-center gap-5">
              <div className="rounded-full border-4 w-14 h-14 border-white">
                <Image src="" alt="profile" />
              </div>
              <div className="text-white font-semibold">
                <div>Muriithi Gitonga</div>
                <div className="opacity-70">Software Developer</div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonials;
