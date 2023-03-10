import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up and stay up to date</p>
        </div>
        <div className="my-4 flex flex-col md:flex-row items-center justify-between w-full">
          <input
            className="p-3 flex w-full rounded-md text-black"
            type="email"
            placeholder="Enter email..."
          />
          <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 px-6 py-3 ml-4 text-black">
            Notify me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
