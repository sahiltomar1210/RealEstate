import Basic from "../pages/AddNewProperty/Basic/Basic";
import General from "../pages/AddNewProperty/General/General";
import PropertyInfo from "../pages/AddNewProperty/Property/Property"
import React, { useState } from "react";
import SideBar from "../../src/components/Sidebar/sidebar"
import Header from "../../src/components/Header/header"
import "./settingpage.css"

export default function Form() {
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

    const FormTitles = ["Basic Info", "Property Details", "General Info"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Basic formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <General formData={formData} setFormData={setFormData} />;
        } else {
            return <PropertyInfo formData={formData} setFormData={setFormData} />;
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
                        <label className="search-left">Add New Property</label>
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
                            </div>
                            <div className="sub-form-container">
                                <div className="body">{PageDisplay()}</div>
                                <div className="btns">
                                    <button
                                        className="property-buttons-left"
                                        disabled={page === 0}
                                        onClick={() => {
                                            setPage((currPage) => currPage - 1);
                                        }}
                                    >
                                        {page === 0 ? "Cancel" : "Prev"}
                                    </button>
                                    <button
                                        className="property-buttons-right"
                                        onClick={() => {
                                            if (page === FormTitles.length - 1) {
                                                alert("FORM SUBMITTED");
                                                console.log(formData);
                                            } else {
                                                setPage((currPage) => currPage + 1);
                                            }
                                        }}
                                    >
                                        {page === FormTitles.length - 1 ? "Submit" : "Next"}
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
