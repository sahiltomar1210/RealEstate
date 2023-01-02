import React,{useEffect, useState} from 'react';
import "./Table.css"
import data from "./mock-data.json";
function Table() {
    const token = window.localStorage.getItem("token");
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
                     window.localStorage.setItem("fetchdata",data)
                  }
                  if(data.status === "Failed" && data.message ==="User Not Registered"){
                    alert("Please Sign Up First")
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
    const [details,setDetails] =useState(data)
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
                    {
                        details.map((detail) => (
                            <tr>
                                <td>{detail.ppdid}</td>
                                <td>{detail.image}</td>
                                <td>{detail.property}</td>
                                <td>{detail.contact}</td>
                                <td>{detail.area}</td>
                                <td>{detail.views}</td>
                                <td>{detail.status}</td>
                                <td>{detail.daysleft}</td>
                                <td>{detail.action}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table;
