import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { CustomersCard } from "./CustomersCard.js"
import { EmployeesCard } from "./EmployeesCard.js"
import { LocationsCard } from "./LocationsCard.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

            {/* Render the locations list when http://localhost:3000/locations */}
            <Route path="/locations">
                <LocationsCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route path="/customers">
                <CustomersCard />
            </Route>

            {/* Render the animal list when http://localhost:3000/employees */}
            <Route path="/employees">
                <EmployeesCard />
            </Route>

        </>
    )
}