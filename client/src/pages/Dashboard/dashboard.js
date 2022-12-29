import "./styles.css";
import React from "react";
import SideBar from "./sidebar";
//import Table from "./table";
import Navbar from "./navbar";
import Search from "./search";
import { Navigate } from "react-router-dom";

function Dashboard() {
  const authenticated = window.localStorage.getItem("authenticated");
  if (!authenticated) {
      return <Navigate replace to="/" />;
    }
    else{
    return (
      <div>
        <div className="container">
          <SideBar />
        </div>
        <div className="nav-container">
          <Navbar />
        </div>
        <div className="search-container">
          <Search />
        </div>

        {/* <div className="table-container">
        <Table />
      </div> */}
      </div>
    );
    }
}

export default Dashboard;
