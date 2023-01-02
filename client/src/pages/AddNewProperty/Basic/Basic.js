import React from "react";
import "./Basic.css"
function Basic({ formData, setFormData }) {
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
              <label htmlFor="propertytype">Property Type</label>
            </div>
            <select
              id="propertytype"
              name="propertytype"
              value={formData.propertytype}
              onChange={handleChange}
            >
              <option hidden value="">Select Type</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Plot">Plot</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="price">Price</label>
            </div>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />

            <div className="blockLabel">
              <label htmlFor="propertyage">Property Age</label>
            </div>
            <select
              type="number"
              id="propertyage"
              name="propertyage"
              value={formData.propertyage}
              onChange={handleChange}
            >
              <option hidden value="">Select Age</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="propertydescription">Property Description</label>
            </div>
            <input
              type="string"
              id="propertydescription"
              name="propertydescription"
              value={formData.propertydescription}
              onChange={handleChange}
            />

          </div>

          <div className="form-right">
          <div className="blockLabel">
              <label htmlFor="negotable">Negotable</label>
            </div>
            <select
              id="negotable"
              name="negotable"
              value={formData.negotable}
              onChange={handleChange}
            >
              <option hidden value="">Select Negotable</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="ownership">Ownership</label>
            </div>
            <select
              id="ownership"
              name="ownership"
              value={formData.ownership}
              onChange={handleChange}
            >
              <option hidden value="">Select Ownership</option>
              <option value="Own">Own</option>
              <option value="Rented">Rented</option>
              <option value="Lease">Lease</option>
            </select>

            <div className="blockLabel">
              <label htmlFor="propertyapproved">Property Approved</label>
            </div>
            <select
              id="propertyapproved"
              name="propertyapproved"
              value={formData.propertyapproved}
              onChange={handleChange}
            >
              <option hidden value="">Select Approval</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <div className="blockLabel">
              <label htmlFor="bankloan">Bank Loan</label>
            </div>
            <select
              id="bankloan"
              name="bankloan"
              value={formData.bankloan}
              onChange={handleChange}
            >
              <option hidden value="">Bank Loan</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            </div>
        </div>
    </div>
  );
}

export default Basic;