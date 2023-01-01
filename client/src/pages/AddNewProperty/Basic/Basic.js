import React from "react";

import "./AddNewProperty.css";

const Property = ({ formData, setFormData, errors }) => {
  console.log(errors);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <form>
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
              <label htmlFor="lift">Lift </label>
            </div>
            <select
              id="lift"
              name="lift"
              value={formData.lift}
              onChange={handleChange}
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
              value={formData.facing}
              onChange={handleChange}
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
              id="breadth"
              name="breadth"
              value={formData.breadth}
              onChange={handleChange}
            />
            <div className="blockLabel">
              <label htmlFor="areaunit">areaunit </label>
            </div>
            <input
              type="text"
              id="areaunit"
              name="areaunit"
              value={formData.areaunit}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="westerntoilet">westerntoilet </label>
            </div>
            <select
              id="westerntoilet"
              name="westerntoilet"
              value={formData.westerntoilet}
              onChange={handleChange}
            >
              <option value="">Select westerntoilet</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="btns"></div>
        </div>
      </form>
    </div>
  );
};

export default Property;
