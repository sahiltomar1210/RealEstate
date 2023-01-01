const token = window.localStorage.getItem("token");
fetch("http://localhost:8000/property/basic", {
    method: "POST",
    crossDomain: true,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authentication": `random ${token}`
    },
    body: JSON.stringify({
        propertytype,
        negotable,
        price,
        ownership,
        propertyage,
        propertyapproved,
        propertydescription,
        bankloan,
        name,
        mobile,
        postedby,
        saletype,
        featuredpackage,
        ppdpackage,
        email,
        city,
        area,
        pincode,
        address,
        landmark,
        latitude,
        longitude,
        length,
        breath,
        totalarea,
        areaunit,
        bhk,
        floors,
        attached,
        westerntoilet,
        furnished,
        carparking,
        lift,
        electricity,
        facing,
        ppdid
    }),
})
    .then((res) => res.json())
    .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "Success") {
            alert(data);
        }
        else if (data.status === "Failed") {
            alert(`${data.message}`)
        }
        else {
            alert(`${data.errors[0].param}  ${data.errors[0].msg}`)
        }
    });