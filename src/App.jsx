import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import { styles } from "./style";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,

} from "./components";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern min-h-screen bg-cover bg-no-repeat bg-center">
          <Navbar />
          {
            windowWidth >1000 ? <Hero/>:(<div
                    className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
                  >
                    <div className="flex flex-col justify-center items-center mt-5">
                      <div className="w-5 h-5 rounded-full bg-[#915eff]" />
                      <div className="w-1 sm:h-80 h-40 violet-gradient" />
                    </div>
                    <div>
                      <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I'm <span className="text-[#915eff]">Hariharan</span>
                      </h1>
                      <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        Passionate about building scalable web applications with modern technologies.
                      </p>
                      <div className="h-fit p-4 ">
                        <img src="/Hari.png" alt="" className=" rounded-full  shadow-2xl mix-blend-lighten" />
                        
                      </div>
                    </div>
                  </div>)
          }
         
        
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
