import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const userArr = require("../../../utils/localstorage");
export const Property = () => {
    const [price, setPrice] = useState("");
    const [propertydescription, setPropertyDescription] = useState("");
    const [propertytype, setPropertyType] = useState("");
    const [negotable, setNegotable] = useState("");
    const [ownership, setOwnership] = useState("");
    const [propertyage, setPropertyAge] = useState("");
    const [propertyapproved, setPropertyApproved] = useState("");
    const [bankloan, setBankLoan] = useState("");
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(token !=null){
        userArr.push({
        propertytype:propertytype,
        negotable:negotable,
        price:price,
        ownership:ownership,
        propertyage:propertyage,
        propertyapproved:propertyapproved,
        propertydescription:propertydescription,
        bankloan:bankloan,
        }); 
        console.log(userArr);
       }else{
           alert("User Not Authorised");
       } 
    };
        return (
            <div className="main">
                <div className="auth-form-container">
                    <h2>Add new Property</h2>
                    <p>Enter your credentials to access your account</p>
                    <form className="login-form" onSubmit={handleSubmit} autoComplete='off'>
                        <label htmlFor="price">Property Type</label>   
                        <select value={propertytype} onChange={(e) => setPropertyType(e.target.value)}id="propertytype" name="propertytype">
                            <option value=""></option>
                            <option value="Plot">Plot</option>
                            <option value="House">House</option>
                            <option value="Flat">Flat</option>
                        </select>
                        <label htmlFor="price">Negotable</label>
                        <select value={negotable} onChange={(e) => setNegotable(e.target.value)}id="negotable" name="negotable">
                            <option value=""></option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="price">Price</label>
                        <input value={price} onChange={(e) => setPrice(e.target.value)} type="" placeholder="Example: 10000" id="price" name="price" />
                        <label htmlFor="price">Ownership</label>
                        <select value={ownership} onChange={(e) => setOwnership(e.target.value)}id="ownership" name="ownership">
                            <option value=""></option>
                            <option value="Owned">Owned</option>
                            <option value="Rented">Rented</option>
                            <option value="Lease">Lease</option>
                        </select>
                        <label htmlFor="price">Property Age</label>
                        <select value={propertyage} onChange={(e) => setPropertyAge(e.target.value)}id="propertyage" name="propertyage">
                            <option value="">Select Attached</option>
                            <option value="Old">Old</option>
                            <option value="New">New</option>
                        </select>
                        <label htmlFor="price">Property Approved</label>
                        <select value={propertyapproved} onChange={(e) => setPropertyApproved(e.target.value)}id="propertyapproved" name="propertyapproved">
                            <option value=""></option>
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="propertydescription">Property Description</label>
                        <input value={propertydescription} onChange={(e) => setPropertyDescription(e.target.value)} type="string" placeholder="" id="propertydescription" name="propertydescription" />
                        <label htmlFor="price">Property Type</label>
                        <select value={bankloan} onChange={(e) => setBankLoan(e.target.value)}id="bankloan" name="bankloan">
                            <option value="">Select Attached</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <button>Log In</button>
                        <button className="link-btn" onClick={() => navigate("/SignUp")}>Don't have an account? Register</button>
                    </form>
                </div>
            </div>
        )
}
