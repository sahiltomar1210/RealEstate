import "./styles.css";
import React from "react";
import SideBar from "./sidebar";
//import Table from "./table";
import Navbar from "./navbar";
import Search from "./search";

function Dashboard() {
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

export default Dashboard;
