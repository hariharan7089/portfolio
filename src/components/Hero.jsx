import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Hari from "../assets/Hari.JPG"

function Hero() {
    return (
        <div className='grid grid-cols-1 min-h-[700px] sm:grid-cols-3 bg-black gap-5 max-w-[1200px] mx-auto py-5 '>

            <div className="my-auto mx-auto">
                <div className="w-[300px] h-auto lg:w-[400]">
                    <img src={Hari} alt="" className=' rounded-md w-80 '  />
                </div>
            </div>
            <div className="col-span-2 px-5 ml-4 my-auto">
                <h1 className='text-2xl text-white sm:text-5xl  lg:text-6xl font-extrabold '>
                    <span className='primary-color'>
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "Backend Dev",
                            1000,
                            "Data analyst",
                            1000
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity} />
                </h1>
                <p className='text-white'>
                    My Name Is Hari Haran and I have 1+ Year Experience in Web development
                </p>
                <div className="">
                    <div className="mt-4">
                        <a
                            href="https://github.com/hariharan7089"
                            target="_blank"
                            className="btn-primary border border-gray-400 px-5 py-3 text-white rounded-md transition-all duration-500 ease-in-out hover:bg-gradient-to-r from-orange-500 to-pink-600/90 hover:scale-105"
                        >
                            GitHub
                        </a>|
                        <a
                            href="https://www.linkedin.com/in/hariharanfsd/"
                            target="_blank"
                            className="btn-outline px-5 py-3 text-white rounded-md border border-gray-400 transition-all duration-500 ease-in-out hover:bg-gray-700 hover:border-gray-600 hover:scale-105"
                        >
                            LinkedIn
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Hero