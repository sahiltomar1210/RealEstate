import Basic from '../../src/pages/AddNewProperty/Basic/Basic';
import PropertyDetails from '../../src/pages/AddNewProperty/General/Property';
import React, { useState } from "react";

export default function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        propertytype: "",
        negotable: "",
        price: "",
        ownership: "",
        propertyage: "",
        propertyapproved: "",
        propertydescription: "",
        bankloan: "",
        name: "",
        mobile: "",
        postedby: "",
        saletype: "",
        featuredpackage: "",
        ppdpackage: "",
        email: "",
        city: "",
        area: "",
        pincode: "",
        address: "",
        landmark: "",
        latitude: "",
        longitude: "",
        length: "",
        breath: "",
        totalarea: "",
        areaunit: "",
        bhk: "",
        floors: "",
        attached: "",
        westerntoilet: "",
        furnished: "",
        carparking: "",
        lift: "",
        electricity: "",
        facing: "",
    });
    const conditionalComponent = () => {
        switch (page) {
            case 0:
                return <Basic formData={formData} setFormData={setFormData} />;
            case 1:
                return <PropertyDetails formData={formData} setFormData={setFormData} />;
            default:
                return <Basic formData={formData} setFormData={setFormData} />;
        }
    };
    function handleSubmit() {
        if (page === 0) {
            if (formData.name === '' || formData.name.length <= 1) {
                return alert('Please enter your name');
            } else {
                setPage(page + 1);
                console.log(formData);
            }
        } else if (page === 1) {
            if (formData.email === '' || !formData.email.includes('@')) {
                return alert('Please enter a valid email');
            } else if (!formData.employment_status) {
                return alert('Please select your employment status');
            } else {
                setPage(page + 1);
                console.log(formData);
            }
        } else if (page === 2) {
            setPage(0);
            console.log(formData);
            setFormData({
                name: '',
                email: '',
                employment_status: null,
            });
        } else setPage(page + 1);
    }

    return (
        <>
            {conditionalComponent()}
            <Button onClick={handleSubmit}>
                {page === 0 || page === 1 ? "Next" : "Submit"}
            </Button>
            {
                page > 0 && <Button onClick={() => setPage(page - 1)}>Back</Button>
            }
        </>
    )
}
