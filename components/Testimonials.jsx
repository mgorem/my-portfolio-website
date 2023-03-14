import React from "react";
import Image from "next/image";

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
        </div>
        {/* Testimonial 2 */}
        <div
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
          bg-gradient-to-br from-blue-900 to-blue-200"
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
        </div>

        {/* Testimonial 3 */}
        <div
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
          bg-gradient-to-br from-red-900 to-red-300"
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
        </div>

        {/* Testimonial 4 */}
        <div
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
        </div>

        {/* Testimonial 5 */}
        <div
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
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
