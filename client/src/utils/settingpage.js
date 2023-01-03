import Basic from "../pages/AddNewProperty/Basic/Basic";
import General from "../pages/AddNewProperty/General/General";
import LocationInfo from "../pages/AddNewProperty/Location/Location"
import PropertyInfo from "../pages/AddNewProperty/Property/Property"
import React, { useState } from "react";
import SideBar from "../../src/components/Sidebar/sidebar"
import Header from "../../src/components/Header/header"
import "./settingpage.css"
import { useNavigate } from "react-router-dom";

export default function Form() {
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        propertytype: "",
        negotable: "",
        price: "",
        ownership: "",
        propertyage: "",
        propertyapproved: "",
        propertydescription: "",
        bankloan: "",
        name: "",
        mobile: "",
        postedby: "",
        saletype: "",
        featuredpackage: "",
        ppdpackage: "",
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: "",
        length: "",
        breath: "",
        totalarea: "",
        areaunit: "",
        bhk: "",
        floors: "",
        attached: "",
        westerntoilet: "",
        furnished: "",
        carparking: "",
        lift: "",
        electricity: "",
        facing: "",
    });

    const PageDisplay = () => {
        if (page === 0) {
            return <Basic formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PropertyInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2){
            return < General formData={formData} setFormData={setFormData} />;
        } else if(page ===3){
            return <LocationInfo formData={formData} setFormData={setFormData} />
        }
    };
    return (
        <div className='location-main-container'>
            <div className='location-submain-left'>
                <SideBar />
            </div>
            <div className='location-submain-right'>
                <div className='submain-right-top'>
                    <Header />
                </div>
                <div className='submain-main-line'>
                </div>
                <div className='submain-right-bottom'>
                    <div className="search-main-container">
                        <label className="setting-left">Add New Property</label>
                    </div>
                    <div className="right-bottom-table">
                        <div className="submit-form-container">
                            <div className="progressbar">
                                <div
                                    class="form-nav"
                                    id="0"
                                    onClick={(e) => {
                                        const pageId = Number(e.target.id);
                                        setPage(pageId);
                                    }}
                                    className={page === 0 ? "darkBlue" : "lightBlue"}
                                >
                                    Basic Info
                                </div>
                                <div
                                    class="form-nav"
                                    id="1"
                                    onClick={(e) => {
                                        const pageId = Number(e.target.id);
                                        setPage(pageId);
                                    }}
                                    className={page === 1 ? "darkBlue" : "lightBlue"}
                                >
                                    Property Details
                                </div>
                                <div
                                    class="form-nav"
                                    id="2"
                                    onClick={(e) => {
                                        const pageId = Number(e.target.id);
                                        setPage(pageId);
                                    }}
                                    className={page === 2 ? "darkBlue" : "lightBlue"}
                                >
                                    General Info
                                </div>
                                <div
                                    class="form-nav"
                                    id="3"
                                    onClick={(e) => {
                                        const pageId = Number(e.target.id);
                                        setPage(pageId);
                                    }}
                                    className={page === 3 ? "darkBlue" : "lightBlue"}
                                >
                                    Location Info
                                </div>
                            </div>
                            <div className="sub-form-container">
                                <div className="body">{PageDisplay()}</div>
                                <div className="btns">
                                    <button
                                        className="property-buttons-left"
                                        onClick={() => {
                                            if(page ===0)
                                            {
                                              navigate("/Dashboard");
                                            }else{
                                            setPage((currPage) => currPage - 1);
                                            }
                                        }}
                                    >
                                        {page === 0 ? "Cancel" : "Prev"}
                                    </button>
                                    <button
                                        className="property-buttons-right"
                                        onClick={() => {
                                            if (page === 3) {
                                                fetch("http://localhost:8000/property/property", {
                                                    method: "POST",
                                                    crossDomain: true,
                                                    headers: {
                                                        "Content-Type": "application/json",
                                                        "Accept": "application/json",
                                                        "Access-Control-Allow-Origin": "*",
                                                        "Authorization":`random ${token}`
                                                    },
                                                    body: JSON.stringify({
                                                        propertytype: formData.propertytype,
                                                        negotable: formData.negotable,
                                                        price: formData.price,
                                                        ownership: formData.ownership,
                                                        propertyage: formData.propertyage,
                                                        propertyapproved: formData.propertyapproved,
                                                        propertydescription: formData.propertydescription,
                                                        bankloan: formData.bankloan,
                                                        name: formData.name,
                                                        mobile: formData.mobile,
                                                        postedby: formData.postedby,
                                                        saletype: formData.saletype,
                                                        featuredpackage: formData.featuredpackage,
                                                        ppdpackage: formData.ppdpackage,
                                                        email: formData.email,
                                                        city: formData.city,
                                                        area: formData.area,
                                                        pincode: formData.pincode,
                                                        address: formData.address,
                                                        landmark: formData.landmark,
                                                        latitude: formData.latitude,
                                                        longitude: formData.longitude,
                                                        length: formData.length,
                                                        breath: formData.breath,
                                                        totalarea: formData.totalarea,
                                                        areaunit: formData.areaunit,
                                                        bhk: formData.bhk,
                                                        floors: formData.floors,
                                                        attached: formData.attached,
                                                        westerntoilet: formData.westerntoilet,
                                                        furnished: formData.furnished,
                                                        carparking: formData.carparking,
                                                        lift: formData.lift,
                                                        electricity: formData.electricity,
                                                        facing: formData.facing,
                                                    }),
                                                })
                                                    .then((res) => res.json())
                                                    .then((data) => {
                                                        console.log(data, "userRegister");
                                                        if (data.status === "Success") {
                                                            alert("FORM SUBMITTED");
                                                            navigate("/Dashboard");
                                                        }
                                                        else if (data.status === "Failed") {
                                                            alert(`${data.message}`)
                                                        }
                                                        else {
                                                            alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
                                                        }
                                                    });
                                            } else {
                                                setPage((currPage) => currPage + 1);
                                            }
                                        }}
                                    >
                                        {page === 3 ? "Submit" : "Next"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
