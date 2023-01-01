
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const userArr = require("../../../utils/localstorage");
export const PropertyDetails = () => {
    const [length, setLength] = useState("");
    const [breath, setBreath] = useState("");
    const [totalarea, setTotalArea] = useState("");
    const [areaunit, setAreaUnit] = useState("");
    const [bhk, setBhk] = useState("");
    const [floor, setFloor] = useState("");
    const [attached, setAttached] = useState("");
    const [westerntoilet, setWesternToilet] = useState("");
    const [furnshied, setFurnshied] = useState("");
    const [carparking, setCarParking] = useState("");
    const [lift, setLift] = useState("");
    const [electricity, setElectricity] = useState("");
    const [facing, setFacing] = useState("");
    const navigate = useNavigate();
    const token = window.localStorage.getItem("token");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(token !=null){
        userArr.push({
            length:length,
            breath:breath,
            totalarea:totalarea,
            areaunit:areaunit,
            bhk:bhk,
            floor:floor,
            attached:attached,
            westerntoilet:westerntoilet,
            furnshied:furnshied,
            carparking:carparking,
            lift:lift,
            electricity:electricity,
            facing:facing
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
                        <label htmlFor="length">Length</label>
                        <input value={length} onChange={(e) => setLength(e.target.value)} type="" placeholder="Example: 10000" id="length" name="length" />
                        <label htmlFor="breath">Breath</label>
                        <input value={breath} onChange={(e) => setBreath(e.target.value)} type="" placeholder="Example: 10000" id="breath" name="breath" />
                        <label htmlFor="totalarea">Total Area</label>
                        <input value={totalarea} onChange={(e) => setTotalArea(e.target.value)} type="" placeholder="Example: 10000" id="totalarea" name="totalarea" />
                        <label htmlFor="areaunit">Area Unit</label>
                        <select value={areaunit} onChange={(e) => setAreaUnit(e.target.value)}id="areaunit" name="areaunit">
                            <option value="Owned">Owned</option>
                            <option value="Rented">Rented</option>
                            <option value="Lease">Lease</option>
                        </select>
                        <label htmlFor="bhk">No of BHK</label>
                        <select value={bhk} onChange={(e) => setBhk(e.target.value)}id="bhk" name="bhk">
                            <option value="Old">Old</option>
                            <option value="New">New</option>
                        </select>
                        <label htmlFor="floor">No of Floor</label>
                        <select value={floor} onChange={(e) => setFloor(e.target.value)}id="floor" name="floor">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="attached">Attached</label>
                        <select value={attached} onChange={(e) => setAttached(e.target.value)}id="attached" name="attached">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="westerntoilet">Western Toilet</label>
                        <select value={westerntoilet} onChange={(e) => setWesternToilet(e.target.value)}id="westerntoilet" name="westerntoilet">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="furnshied">Furnshied</label>
                        <select value={furnshied} onChange={(e) => setFurnshied(e.target.value)}id="furnshied" name="furnshied">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="carparking">Car Parking</label>
                        <select value={carparking} onChange={(e) => setCarParking(e.target.value)}id="carparking" name="carparking">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="lift">Lift</label>
                        <select value={lift} onChange={(e) => setLift(e.target.value)}id="lift" name="lift">
                            <option value="Yes"selected>Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label htmlFor="electricity">Electricity</label>
                        <input value={electricity} onChange={(e) => setElectricity(e.target.value)} type="string" placeholder="" id="electricity" name="electricity" />
                        <label htmlFor="facing">Facing</label>
                        <select value={facing} onChange={(e) => setFacing(e.target.value)}id="facing" name="facing">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <button type="submit">`Save & Continue`</button>
                        <button className="link-btn" onClick={() => navigate("/SignUp")}>Don't have an account? Register</button>
                    </form>
                </div>
            </div>
        )
}
