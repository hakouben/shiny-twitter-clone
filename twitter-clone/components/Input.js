import { CalendarIcon, EmojiHappyIcon } from "@heroicons/react/outline";
import { ChartBarIcon, PhotographIcon, XIcon } from "@heroicons/react/solid";
import React, { useRef, useState } from "react";
/*importation des emoji de github apres avoir installer le pack avec npm add emoji-mart*/
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
function Input() {
    const[input,setInput]=useState("");
    const[selectedFile,setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    const [showEmojis, setShowEmojis] = useState(false);

    const addImageToPost = () => {};

    const addEmoji = (e) => {
      let sym = e.unified.split("-");
      let codesArray = [];
      sym.forEach((el) => codesArray.push("0x" + el));
      let emoji = String.fromCodePoint(...codesArray);
      setInput(input + emoji);
    };
    return <div className={`border-b border-gray-700 p-4 flex space-x-3`}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsk7CNY1CFN_p0sfY6zR8KeobcLgl9Zs1xxw&usqp=CAU"className="h-11 w-11 rounded-full cursor-pointer"/>
      <div className="w-full divide-y divide-gray-700">
           
            <div className={``}>
                <textarea value={input}
                 rows="2" 
                 className=" bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]" 
                onChange={(e)=> setInput(e.target.value)}
                placeholder="Quoi de Neuf !?"/>

                {selectedFile &&(
                <div className="relative">
                    <div className="absolute w-8 h-8 hover:bg-[#15181c] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer" onClick={()=>setSelectedFile(null)}>
                        <XIcon className=" text-white h-5"/>
                        </div >
                        <img src={selectedFile} className=" rounded-2xl max-h-80 object-contain"/>
                        </div>
                )} 
            </div>
            <div className="flex items-center justify-between pt-2.5 ">
            <div className="flex items-center" >
              <div  className=" icon" onClick={()=> filePickerRef.current.click()}>
                    <PhotographIcon className="h-[22px] text-[#1d9bf0]"/>
                    <input type="file" onChange={addImageToPost} ref={filePickerRef} hidden/>
              </div>
              
              <div className="icon rotate-90">
                <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon" onClick={() => setShowEmojis(!showEmojis)}>
                <EmojiHappyIcon className="text-[#1d9bf0] h-[22px]" />
              </div>

              <div className="icon">
                <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
              </div>
              {showEmojis && (
                <Picker
                onSelect={addEmoji}
                style={{
                  position: "absolute",
                  marginTop: "465px",
                  marginRight: 40,
                  maxWidth: "320px",
                  borderRadius: "20px",
                }}
                theme="dark"
              />
              )}
            </div>

            </div>
      </div>
  </div>
}
export default Input;
