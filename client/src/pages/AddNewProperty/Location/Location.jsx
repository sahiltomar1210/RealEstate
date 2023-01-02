import React from "react";
import "./Location.css"

function LocationInfo({ formData, setFormData }) {
    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value
        });
      };
  return (
    <div className="basic-container">
      <div className="grid">
          <div className="form-left">
            <div className="blockLabel">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="area">Area</label>
            </div>
            <select
              id="area"
              name="area"
              value={formData.area}
              onChange={handleChange}
            >
              <option hidden value="">Select Area</option>
              <option value="Govt">Govt</option>
              <option value="Public">Public</option>
              <option value="Coperate">Coperate</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="address">Address</label>
            </div>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="latitude">Latitude</label>
            </div>
            <input
              type="number"
              id="latitude"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
            />

            
          </div>

          <div className="form-right">
          <div className="blockLabel">
              <label htmlFor="city">City</label>
            </div>
            <select
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            >
              <option hidden value="">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Haryana">Haryana</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
            
            <div className="blockLabel">
              <label htmlFor="pincode">Pincode</label>
            </div>
            <select
              id="pincode"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
            >
              <option value="">Select Pincode</option>
              <option value="110001">110001</option>
              <option value="110011">110011</option>
              <option value="110032">110032</option>
            </select>

    
            <div className="blockLabel">
              <label htmlFor="landmark">Landmark</label>
            </div>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="longitude">Longitude</label>
            </div>
            <input
              type="number"
              id="longitude"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
            />  
          </div>
        </div>
    </div>
  );
}

export default LocationInfo;