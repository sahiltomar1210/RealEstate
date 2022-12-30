import "./styles.css";
import React from "react";
import SideBar from "../../components/Sidebar/sidebar";
//import Table from "./table";
import Header from "../../components/Header/header";
import Search from "./search";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div>
        <div className="container">
          {isLoggedIn &&<SideBar />}
        </div>
        <div className="nav-container">
          {isLoggedIn && <Header />}
        </div>
        <div className="search-container">
          {isLoggedIn && <Search />}
        </div>

        {/* <div className="table-container">
        <Table />
      </div> */}
      </div>
    );

}

export default Dashboard;
