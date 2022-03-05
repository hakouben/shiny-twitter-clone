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
    <div className=" flex space-x-2.5 mt-4 mb-2.5 items-center justify-center w-14 h-14  m-2 p-0 xl:ml-24">
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
    </div>;
}

export default Sidebar;
