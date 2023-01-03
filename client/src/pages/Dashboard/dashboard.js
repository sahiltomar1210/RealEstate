import "./dashboard.css";
import React from "react";
import SideBar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/Table/Table";

function Dashboard() {
  const navigate = useNavigate();
  const token = window.localStorage.getItem("token");
    const [username, setUsername] = useState('');
    useEffect(()=>{
      setUsername(window.localStorage.getItem("username"));
    },[]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [search, setSearch] = useState('');
    const [data,setData]= useState([]); 
    const handleSearch = (event) => {
        setSearch(event.target.value);
        Search();
    };

    
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
        useEffect(() => {
          Search();
      }, [search]); 
        function Search(){
        const ppdid =search
          const fetchdata = () => {
              fetch("http://localhost:8000/property/property/search", {
                  method: "POST",
                  crossDomain: true,
                  headers: {
                      "Content-Type": "application/json",
                      "Accept": "application/json",
                      "Access-Control-Allow-Origin": "*",
                      "Authorization":`random ${token}`
                  },body: JSON.stringify({
                    ppdid
                }),
              })
                  .then((res) => res.json())
                  .then((data) => {
                      console.log(data, "userRegister");
                      if (data.status === "Success") {
                        console.log(data.details);
                        setData(data.details)
                        }
                        else if(data.status === "Failed") {
                         console.log(`${data.message}`)
                         setData('')
                        }
                        else{
                          alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
                        }
                  });
      
              };
             fetchdata();
          } 
          
    return (
      <div className='location-main-container'>
            <div className='location-submain-left'>
              <SideBar/>
            </div>
            <div className='location-submain-right'>
                <div className='submain-right-top'>
                   <Header username={username}/>
                </div>
                <div className='submain-main-line'>
                </div>
                <div className='submain-right-bottom'>
                  <div className="search-main-container">
                  <input className="search-left" type="text" value={search} onChange={handleSearch} placeholder="Search PPD ID"></input>
                  <button className="search-right" onClick={() => navigate("/Basic")}> + Add Property </button>
                  </div>
                  <div className="right-bottom-table">
                     <Table data={data} />
                   </div>
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
