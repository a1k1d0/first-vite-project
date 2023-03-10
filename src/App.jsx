import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="text-blue-500 sm:text-red-500 md:text-purple-500 lg:text-yellow-500 xl:text-white 2xl:text-black"></div>
      <Hero />
    </div>
  );
}

export default App;
