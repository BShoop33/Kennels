import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./CustomersCard.js"
import { EmployeesCard } from "./EmployeesCard.js"
import { LocationsCard } from "./LocationsCard.js"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeesCard />
            <EmployeesCard />
            <EmployeesCard />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationsCard />
            <null />
            <LocationsCard />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </article>
    </>
)