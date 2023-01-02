import React, { useState, useEffect } from "react";
import "./sidebar.css";
import { House, Bell, DownloadSimple, UploadSimple, Eye , Tag} from "phosphor-react";

function SideBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 866px)");
    const handleMediaQueryChange = (event) => {
      setIsMenuOpen(event.matches);
    };
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return (
    <div className="sidebar-main">
      <div onClick={toggleMenu} className="menu-button">
        <svg className="hamburger-icon">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </div>

      {isMenuOpen && (
        <div className="side-bar menu">
          <p className="logo">Logo</p>
          <ul>
            <li>
              <House className="icon" size={13} />
              Property
            </li>
            <li>
              <Bell className="icon" size={13} />
              Assistance
            </li>
            <li>
              <DownloadSimple className="icon" size={13} />
              Received Interest
            </li>
            <li>
              <UploadSimple className="icon" size={13} />
              Sent Interest
            </li>
            <li>
              <Eye className="icon" size={13} />
              Property Views
            </li>
            <li>
              <Tag className="icon" size={13} />
              Tariff Plan
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default SideBar;
