import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./CustomersCard.js"
import { EmployeesCard } from "./EmployeesCard.js"
import { LocationsCard } from "./LocationsCard.js"
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