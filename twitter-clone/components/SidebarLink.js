import React from "react";

function SidebarLink({Icon, text, active}) {
  return <div className={`text-[#87CEFA] flex items-center justify-center xl:justify-start text-xl space-x-3 hoverAnimation ${active && " font-extrabold"}`}>
      <Icon className="h-9"/>
      <span className="hidden md:xl:inline">{text}</span>
  </div>;
}

export default SidebarLink;
