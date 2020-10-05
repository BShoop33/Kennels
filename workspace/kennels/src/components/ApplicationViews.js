import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
// import { CustomersCard } from "./customer/CustomersCard.js"
import { CustomerProvider } from "./customer/CustomersProvider.js"
import { CustomersList } from "./customer/CustomersList.js"
// import { EmployeesCard } from "./employee/EmployeesCard.js"
import { EmployeesProvider } from "./employee/EmployeesProvider.js"
import { EmployeesList } from "./employee/EmployeesList.js"
// import { LocationsCard } from "./location/LocationsCard.js"
import { LocationsProvider } from "./location/LocationsProvider.js"
import { LocationsList } from "./location/LocationsList.js"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}

            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationsProvider>
                <Route path="/locations">
                    <LocationsList />
                </Route>
            </LocationsProvider>
            {/* Render the customers list when http://localhost:3000/customers */}
            <CustomerProvider>
                <Route exact path="/customers">
                    <CustomersList />
                </Route>
            </CustomerProvider>

            {/* Render the animal list when http://localhost:3000/employees */}
            <EmployeesProvider>
                <Route path="/employees">
                    <EmployeesList />
                </Route>
            </EmployeesProvider>

        </>
    )
}