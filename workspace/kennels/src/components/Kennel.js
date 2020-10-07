/* code for site without login page */
// import React from "react"
// import { AnimalCard } from "./animal/AnimalCard"
// import { CustomersCard } from "./customer/CustomersCard.js"
// import { EmployeesCard } from "./employee/EmployeesCard.js"
// import { LocationsCard } from "./location/LocationsCard.js"
// import { Route } from "react-router-dom"
// import { NavBar } from "./nav/NavBar"
// import { ApplicationViews } from "./ApplicationViews"
// import "./Kennel.css"

// export const Kennel = () => (
//     <>
//         <NavBar />
//         <ApplicationViews />
//     </>
// )

/* code for site login page */
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import "./Kennel.css";

export const Kennel = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("kennel_customer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
);