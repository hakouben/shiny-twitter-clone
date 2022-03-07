import { SparklesIcon } from "@heroicons/react/solid";
import React from "react";
import Input from "../components/Input"
function Feed() {
  return <div className=" flex-grow  border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[380px]"> 
  <div className="text-[#d9d9d9] flex items-center sm:justify-between py-2 px-3 sticky top-0 z-50  bg-black border-b border-gray-700">
    <h2 className=" text-lg  sm:text-xl  font-bold ">
      Acceuil
    </h2>
    <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 ml-auto">
      <SparklesIcon/>
    </div>
    </div>
    <Input/>
  </div>
}
  

export default Feed;
