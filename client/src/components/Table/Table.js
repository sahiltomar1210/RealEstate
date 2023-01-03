import React,{useEffect, useState} from 'react';
import "./Table.css"
import { Cards,PencilSimple } from "phosphor-react";
function Table ({data}){
    console.log("Prop Data",data);
    const [details,setDetails] =useState([])
    const token = window.localStorage.getItem("token");
    function generateRandom(maxLimit = 100){
        let rand = Math.random() * maxLimit;
      
        rand = Math.floor(rand);
      
        return rand;
    }
    useEffect(() =>{
    const fetchdata = () => {
        fetch("http://localhost:8000/property/property", {
            method: "GET",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Authorization":`random ${token}`
            }
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status === "Success" && data !==null) {
                    setDetails(data.details)
                  }
                  else if(data.status === "Failed") {
                   alert(`${data.message}`)
                  }
                  else{
                    alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
                  }
            });

        };
       fetchdata();
    },[setDetails]);
    
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>PPD ID</th>
                        <th>Image</th>
                        <th>Property</th>
                        <th>Contact</th>
                        <th>Area</th>
                        <th>Views</th>
                        <th>Status</th>
                        <th>Days left</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { data.length > 0 ?  (
                            <tr>
                                <td name="ppdid">{ data.ppdid }</td>
                                <td name="image">{<Cards size={25} />}</td>
                                <td name="property">{data.propertytype}</td>
                                <td name="contact">{data.mobile}</td>
                                <td name="area">{data.totalarea}</td>
                                <td name="views">{generateRandom()}</td>
                                <td name="status">Unsold</td>
                                <td name="daysleft">{generateRandom()}</td>
                                <td name="action">{<PencilSimple size={25} />}</td>
                            </tr>
                        ) :
                        details.map((detail) => (
                            <tr>
                                <td name="ppdid">{ detail.ppdid }</td>
                                <td name="image">{<Cards size={25} />}</td>
                                <td name="property">{detail.propertytype}</td>
                                <td name="contact">{detail.mobile}</td>
                                <td name="area">{detail.totalarea}</td>
                                <td name="views">{generateRandom()}</td>
                                <td name="status">Unsold</td>
                                <td name="daysleft">{generateRandom()}</td>
                                <td name="action">{<PencilSimple size={25} />}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table;