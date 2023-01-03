import React from "react";
import "./General.css";
import { Camera} from "phosphor-react";
function General({ formData, setFormData }) {
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
            <label htmlFor="name">Name</label>
          </div>
          <select
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          >
            <option hidden value="">Select</option>
            <option value="Owner">Owner</option>
            <option value="Broker">Broker</option>
            <option value="Builder">Builder</option>
          </select>

          <div className="blockLabel">
            <label htmlFor="postedby">Posted By</label>
          </div>
          <select
            id="postedby"
            name="postedby"
            value={formData.postedby}
            onChange={handleChange}
          >
            <option hidden value="">Posted By</option>
            <option value="Sahil">Sahil</option>
            <option value="Vishnu">Vishnu</option>
            <option value="Nitish">Nitish</option>
          </select>

          <div className="blockLabel">
            <label htmlFor="featuredpackage">Featured Package</label>
          </div>
          <select
            id="featuredpackage"
            name="featuredpackage"
            value={formData.featuredpackage}
            onChange={handleChange}
          >
            <option hidden value="">Please Select</option>
            <option value="Attached Balcony">Attached Balcony</option>
            <option value="Sun Faced">Sun Faced</option>
            <option value="With Roof">With Roof</option>
          </select>
          
          <div className="blockLabel general-form-picture">
          <Camera className="general-form-icon" size={25} />
          
          <label htmlFor="featuredpackage">Add Photo</label>
        
          </div>
          
        </div>

        <div className="form-right">
          <div className="blockLabel">
            <label htmlFor="mobile">Mobile</label>
          </div>
          <input
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Enter Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
          <div className="blockLabel">
            <label htmlFor="saletype">Sale Type</label>
          </div>
          <select
            id="saletype"
            name="saletype"
            value={formData.saletype}
            onChange={handleChange}
          >
            <option hidden value="">Please Select</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
            <option value="Plot">Plot</option>
          </select>

          <div className="blockLabel">
            <label htmlFor="ppdpackage">PPD Package</label>
          </div>
          <select
            id="ppdpackage"
            name="ppdpackage"
            value={formData.ppdpackage}
            onChange={handleChange}
          >
            <option hidden value="">Select Package</option>
            <option value="Diamond">Diamond</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
          </select>


        </div>
      </div>
    </div>
  );
}

export default General;