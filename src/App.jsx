import React from "react";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="text-blue-500 sm:text-red-500 md:text-purple-500 lg:text-yellow-500 xl:text-white 2xl:text-black"></div>
      <Hero />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
