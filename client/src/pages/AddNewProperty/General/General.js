import React from "react";
import "./General.css"
function General({ formData, setFormData }) {
  return (
    <div className="basic-container">
      <div className="grid">
          <div className="form-left">
            <div className="blockLabel">
              <label htmlFor="length">Length </label>
            </div>
            <input
              type="number"
              id="length"
              name="length"
        
            />
            <div className="blockLabel">
              <label htmlFor="totalarea">TotalArea </label>
            </div>
            <input
              type="number"
              id="totalarea"
              name="totalarea"
      
            />

            <div className="blockLabel">
              <label htmlFor="bhk">No Of BHK </label>
            </div>
            <select
              id="bhk"
              name="bhk"
            
            >
              <option value="">Select no of BHK</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="attached">Attached </label>
            </div>
            <select
              id="attached"
              name="attached"
            
            >
              <option value="">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="furnished">Furnished </label>
            </div>
            <select
              id="furnished"
              name="furnished"
              
            >
              <option value="">Select Furnished</option>

              <option value="Furnished">Furnished</option>
              <option value="Fully-Furnished">Fully-Furnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="lift">Lift </label>
            </div>
            <select
              id="lift"
              name="lift"
             
            >
              <option value="">Select Lift</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="facing">Facing </label>
            </div>
            <select
              id="facing"
              name="facing"
           
            >
              <option value="">Select Facing</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="form-right">
            <div className="blockLabel">
              <label htmlFor="breath">Breath </label>
            </div>
            <input
              type="number"
              id="breath"
              name="breath"
              
            />
            <div className="blockLabel">
              <label htmlFor="areaunit">areaunit </label>
            </div>
            <input
              type="text"
              id="areaunit"
              name="areaunit"
           
            />

            <div className="blockLabel">
              <label htmlFor="floors">floors </label>
            </div>
            <select
              id="floors"
              name="floors"
              
            >
              <option value="">Select floors</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="westerntoilet">westerntoilet </label>
            </div>
            <select
              id="westerntoilet"
              name="westerntoilet"
            
            >
              <option value="">Select westerntoilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="carparking">carparking </label>
            </div>
            <select
              id="carparking"
              name="carparking"
              
            >
              <option value="">Select carparking</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="electricity">electricity </label>
            </div>
            <select
              id="electricity"
              name="electricity"
            
            >
              <option value="">Select electricity</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="btns"></div>
        </div>
    </div>
  );
}

export default General;