import React,{useState} from 'react';
import "./Table.css"
import data from "./mock-data.json";
function Table() {
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
