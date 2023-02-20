import React from "react";

const Timeline = () => {
  return (
    <div className="">
      <div className="w-full flex justify-center items-center">
        <h2 className="py-4">My Journey 🚶‍♂️️</h2>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-[1240px] my-auto mx-auto w-full grid grid-cols-9">
          {/* Experience 1 */}
          <div className="col-span-4 m w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-4 m-4">
              <h2 className="text-white text-2xl font-medium py-2">Title</h2>
              <p className="text-gray-100 sm:text-sm text-xs">
                👉️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, illo. Autem enim quidem ad mollitia rem perferendis
                maiores odit minima ea quo. Impedit, autem. Temporibus
                architecto est laboriosam dolor odio. <br />
                👉️ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione aut a optio iusto cum fuga esse, assumenda pariatur
                blanditiis dignissimos quidem eaque unde vel sapiente officiis
                cumque veniam ab in?
              </p>
            </div>
          </div>

          <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
              1
            </div>
          </div>

          <div className="col-span-4 w-full h-full"></div>

          {/* Experience 2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
              2
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-4 m-4">
              <h2 className="text-white text-2xl font-medium py-2">Title</h2>
              <p className="text-gray-100 sm:text-sm text-xs">
                👉️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, illo. Autem enim quidem ad mollitia rem perferendis
                maiores odit minima ea quo. Impedit, autem. Temporibus
                architecto est laboriosam dolor odio. <br />
                👉️ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione aut a optio iusto cum fuga esse, assumenda pariatur
                blanditiis dignissimos quidem eaque unde vel sapiente officiis
                cumque veniam ab in?
              </p>
            </div>
          </div>
          {/* Experience 3 */}
          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-4 m-4">
              <h2 className="text-white text-2xl font-medium py-2">Title</h2>
              <p className="text-gray-100 sm:text-sm text-xs">
                👉️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, illo. Autem enim quidem ad mollitia rem perferendis
                maiores odit minima ea quo. Impedit, autem. Temporibus
                architecto est laboriosam dolor odio. <br />
                👉️ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione aut a optio iusto cum fuga esse, assumenda pariatur
                blanditiis dignissimos quidem eaque unde vel sapiente officiis
                cumque veniam ab in?
              </p>
            </div>
          </div>

          <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
              3
            </div>
          </div>

          <div className="col-span-4 w-full h-full"></div>
          {/* Experience 2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className=" relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-700"></div>
            <div className="absolute w-6 h-6 rounded-full bg-gray-700 z-10 text-white text-center">
              4
            </div>
          </div>

          <div className="col-span-4 w-full h-full">
            <div className="w-full h-full bg-gray-700 rounded-md p-4 m-4">
              <h2 className="text-white text-2xl font-medium py-2">Title</h2>
              <p className="text-gray-100 sm:text-sm text-xs">
                👉️ Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, illo. Autem enim quidem ad mollitia rem perferendis
                maiores odit minima ea quo. Impedit, autem. Temporibus
                architecto est laboriosam dolor odio. <br />
                👉️ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ratione aut a optio iusto cum fuga esse, assumenda pariatur
                blanditiis dignissimos quidem eaque unde vel sapiente officiis
                cumque veniam ab in?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
