import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineAlignLeft } from "react-icons/ai";
import React, { useState } from 'react'


function Navbar() {
    const [nav, setnav] = useState(false)
    return (
        <div className="h-fit bg-black flex justify-between px-6 p-3">
            <div className="">
                <h1 className="primary-color">
                    {!nav ?"Hariharan.k":""}
                </h1>
            </div>
            <div className="">
                <ul className="hidden md:flex gap-4 text-white">
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Skills</a></li>
                    <li><a href="">Contacts</a></li>
                </ul>
            </div>
            <div className="cursor-pointer block md:hidden" onClick={() => { setnav(!nav) }}>
                {
                    nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineAlignLeft size={20} className="text-white" />
                }

            </div>
            <div className={nav ? `fixed h-full rounded-md bg-slate-400 bg-opacity-50 backdrop-blur-sm top-0 left-0 w-[40%] duration-500 ease-in-out p-3` : `fixed left-[-100%]`}>

                <div >
                    <h1 className="primary-color text-xl ">
                        Hariharan.k
                    </h1>
                </div>
                <div className=" p-8">
                    <ul className=" p-3 flex flex-col gap-3   ">
                        <li className="text-white w-[100%] hover:text-black transition ease-linear duration-200 "><a href="">Home</a></li>
                        <li className="text-white w-[100%] hover:text-black transition ease-linear duration-200"><a href="">About</a></li>
                        <li className="text-white w-[100%] hover:text-black transition ease-linear duration-200"><a href="">Skills</a></li>
                        <li className="text-white w-[100%] hover:text-black transition ease-linear duration-200"><a href="">Contacts</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Navbar