import React from "react";
import "./Property.css"

function PropertyInfo({ formData, setFormData }) {
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
              <label htmlFor="length">Length </label>
            </div>
            <input
              type="number"
              id="length"
              name="length"
              value={formData.length}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="totalarea">TotalArea </label>
            </div>
            <input
              type="number"
              id="totalarea"
              name="totalarea"
              value={formData.totalarea}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="bhk">No Of BHK </label>
            </div>
            <select
              id="bhk"
              name="bhk"
              value={formData.bhk}
              onChange={handleChange}
            >
              <option hidden value="">Select no of BHK</option>
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
              value={formData.attached}
              onChange={handleChange}
            >
              <option hidden value="">Select Attached</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="furnished">Furnished </label>
            </div>
            <select
              id="furnished"
              name="furnished"
              value={formData.furnished}
              onChange={handleChange}
            >
              <option hidden value="">Select Furnished</option>

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
              value={formData.lift}
              onChange={handleChange}
            >
              <option hidden value="">Select Lift</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="facing">Facing </label>
            </div>
            <select
              id="facing"
              name="facing"
              value={formData.facing}
              onChange={handleChange}
            >
              <option hidden value="">Select Facing</option>
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
              value={formData.breath}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="areaunit">Area Unit</label>
            </div>
            <input
              type="text"
              id="areaunit"
              name="areaunit"
              value={formData.areaunit}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="floors">Floors</label>
            </div>
            <select
              id="floors"
              name="floors"
              value={formData.floors}
              onChange={handleChange}
            >
              <option hidden value="">Select floors</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="westerntoilet">Western Toilet</label>
            </div>
            <select
              id="westerntoilet"
              name="westerntoilet"
              value={formData.westerntoilet}
              onChange={handleChange}
            >
              <option hidden value="">Select westerntoilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="carparking">Car Parking</label>
            </div>
            <select
              id="carparking"
              name="carparking"
              value={formData.carparking}
              onChange={handleChange}
            >
              <option hidden value="">Select carparking</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="electricity">Electricity</label>
            </div>
            <select
              id="electricity"
              name="electricity"
              value={formData.electricity}
              onChange={handleChange}
            >
              <option hidden value="">Select electricity</option>

              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
    </div>
  );
}

export default PropertyInfo;