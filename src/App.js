import gsap from "gsap";

import { useEffect, useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
function App() {
 

  return (
    <div className=" bg-black min-h-screen w-full" >
     <Navbar />
     <Hero />
    </div>
  );
}

export default App;
