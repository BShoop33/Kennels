import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./customer/CustomersCard.js"
import { EmployeesCard } from "./employee/EmployeesCard.js"
import { LocationsCard } from "./location/LocationsCard.js"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>
)