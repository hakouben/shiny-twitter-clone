import Image from "next/image";
import SidebarLink from "../components/SidebarLink";
import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
function Sidebar() {
  return <div className=" hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
    <div className=" flex space-x-2.5 mt-4 mb-2.5 items-center justify-center w-14 h-14  m-2 p-0 xl:ml-[8.2rem] ">
    <img  src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-star-new-year-kiranshastry-gradient-kiranshastry.png"/>
    <span className={`text-[#87CEFA] text-2xl hidden xl:inline `}>Shiny</span>
    </div>
    <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
    <SidebarLink text="Home" Icon={HomeIcon} active />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardListIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>
      <button className="hidden xl:inline ml-auto bg-[#87CEFA]  text-black text-xl rounded-full w-56 h-[52px] hover:bg-[#00BFFF] ">Shine</button>
      <div className="text-[#d9d9d9] flex items-center justify-center hoverAnimation xl:ml-auto xl:-mr-5 mt-auto">
        <img className="h-10 w-10 rounded-full xl:mr-2.5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsk7CNY1CFN_p0sfY6zR8KeobcLgl9Zs1xxw&usqp=CAU"/>
      <div className=" hidden xl:inline leading-5">
        <h4 className="font-bold">Firebase 001</h4>
        <p className="text-[#6e767d]">@Firebase001</p>
      </div>
      <DotsHorizontalIcon className="h-5 hidden xl:inline ml-10"/>
      </div>
    </div>;
}

export default Sidebar;
