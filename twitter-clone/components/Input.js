import { XIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
function Input() {
    const[input,setInput]=useState("");
    const[selectedFile,setSelectedFile] = useState(null);

    return <div className={`border-b border-gray-700 p-4 flex space-x-3`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsk7CNY1CFN_p0sfY6zR8KeobcLgl9Zs1xxw&usqp=CAU"className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-700">
           
            <div className={``}>
                <textarea value={input}
                 rows="2" 
                 className=" bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" 
                onChange={(e)=> setInput(e.target.value)}
                placeholder="Quoi de Neuf !?"/>
            
                <div className="relative">
                <div className="absolute w-8 h-8 hover:bg-[#15181c] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer">
                    <XIcon className=" text-white h-5"/>
                    </div >
                    <img src={selectedFile} className=" rounded-2xl max-h-80 object-contain"/>
                    </div>
                    </div>
      </div>
  </div>
}
export default Input;
