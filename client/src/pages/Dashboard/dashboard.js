import "./dashboard.css";
import React from "react";
import SideBar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";

function Dashboard() {
  const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const checkUserToken = () => {
        const userToken = localStorage.getItem('token');

        if (!userToken || userToken === 'undefined'|| userToken === '') {
            setIsLoggedIn(false);
            return navigate('/');
        }
        setIsLoggedIn(true);
    }

    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
      <div className='location-main-container'>
            <div className='location-submain-left'>
              <SideBar/>
            </div>
            <div className='location-submain-right'>
                <div className='submain-right-top'>
                   <Header/>
                </div>
                <div className='submain-main-line'>
                </div>
                <div className='submain-right-bottom'>
                  <div className="search-main-container">
                  <input className="search-left" type="text" placeholder="Search PPD ID"></input>
                  <button className="search-right" onClick={() => navigate("/Basic")}> + Add Property </button>
                  </div>
                  <div className="right-bottom-table">
                     <Table/>
                   </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
