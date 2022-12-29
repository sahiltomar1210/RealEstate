import React from "react";
import "./styles.css";
import { House, Bell, DownloadSimple, UploadSimple, Eye } from "phosphor-react";

function SideBar() {
  return (
    <div className="side-bar">
      <p className="logo">LOGO</p>
      <ul>
        <li>
          <House class="icon" size={13} />
          Menu item 1
        </li>
        <li>
          <Bell class="icon" size={13} />
          Menu item 2
        </li>
        <li>
          <DownloadSimple class="icon" size={13} />
          Menu item 3
        </li>
        <li>
          <UploadSimple class="icon" size={13} />
          Menu item 3
        </li>
        <li>
          <Eye class="icon" size={13} />
          Menu item 3
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
