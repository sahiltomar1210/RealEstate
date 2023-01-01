import './Location.css';
import React from "react";
import SideBar from '../../../components/Sidebar/sidebar';
import Header from '../../../components/Header/header';
import { useNavigate } from 'react-router-dom';
export const Location = () => {
    const navigate = useNavigate();
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

                    <div className='togglebar'>

                    </div>
                    <div className='main-text'>Add New Property</div>
                    <div className='bottom-main'>
                       <button onClick={()=>navigate("/Dashboard")}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
