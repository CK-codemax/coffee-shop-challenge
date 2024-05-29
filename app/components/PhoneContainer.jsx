'use client'
import { useEffect, useRef, useState } from "react";

export default function PhoneContainer() {
    //I created a state variable that expands the top notch when it is true. Then I will manage toggle of the isOpen variable based on click of the component.
    const [isOpen, setIsOpen] = useState(false);
   
  return (
    // <div className="bg-zinc-900 pt-[30%] s:w-[90%] xs:w-full sm:w-[80%] lg:w-[75%] xl:w-1/2 flex flex-col justify-start items-center overflow-hidden h-[80%] rounded-md">
    //     <div onClick={() => setIsOpen(initState => !initState)} className={`bg-black translate-y-[72px] cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-between rounded-full ${isOpen ? "h-[50px] sm:h-[67px] px-4 w-[80%]" : "h-[37px] w-[43%] sm:w-[163px] px-2"}`}>
    //         <div className="flex items-center relative space-x-3">
    //             <img
    //             className={` ${isOpen ? 'w-[50px]' : 'w-[35px]'} object-cover h-auto transition-all duration-300 ease-in-out`} src={'/airpods.png'} alt="airpods" />
    //             <div  className={`${isOpen ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
    //                 <p className="text-xs text-gray-500">Connected</p>
    //                 <p className="text-white font-[500px]">{"Neeha's Airpods"}</p>
    //             </div>
    //         </div>
    //         <div className={`flex items-center justify-center ${isOpen ? 'h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] border-4' : 'h-[25px] w-[25px] border-2'} transition-all duration-300 ease-in-out bg-transparent rounded-full border-green-400 border-l-gray-800 -rotate-30`} >
    //             <span className={`text-green-400 font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>80</span>
    //         </div>
    //         </div>
    //     <img className="h-auto w-[95%] sm:w-[400px] lg:w-[400px] xl:w-[420px]" src={'/iPhone14ProMax.png'} alt="iphone"/>
    // </div>
    <div className="bg-zinc-900 xl:pt-24 relative s:w-[90%] xs:w-full sm:w-[500px] lg:w-[580px] xl:w-[700px] flex justify-center items-start overflow-hidden h-[80%] rounded-md">
        <img className="h-auto w-[95%] xs:top-[55%] sm:w-[400px] lg:w-[400px] xl:w-[420px] absolute top-[42%] sm:top-[55%] lg:top-[65%] xl:top-[20%]" src={'/iPhone14ProMax.png'} alt="iphone"/>
        <div onClick={() => setIsOpen(initState => !initState)} className={`absolute xs:top-[58%] top-[45%] sm:top-[57.5%] lg:top-[67%] xl:top-[120px] bg-black cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-between rounded-full ${isOpen ? "h-[50px] sm:h-[67px] px-4 w-[80%] sm:w-[320px] lg:w-[350px]" : "h-[37px] w-[43%] sm:w-[163px] px-2"}`}>
            <div className="flex items-center relative space-x-3">
                <img
                className={`absolute ${isOpen ? 'w-[50px]' : 'w-[35px]'} object-cover h-auto transition-all duration-300 ease-in-out`} src={'/airpods.png'} alt="airpods" />
                <div  className={`${isOpen ? 'opacity-100 pl-12' : 'opacity-0'} transition-all duration-300 ease-in-out`}>
                    <p className="text-xs text-gray-500">Connected</p>
                    <p className="text-white font-[500px]">{"Neeha's Airpods"}</p>
                </div>
            </div>
            <div className={`flex items-center justify-center ${isOpen ? 'h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] border-4' : 'h-[25px] w-[25px] border-2'} transition-all duration-300 ease-in-out bg-transparent rounded-full border-green-400 border-l-gray-800 -rotate-30`} >
                <span className={`text-green-400 font-semibold transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>80</span>
            </div>
            </div>
    </div>
  )
}
