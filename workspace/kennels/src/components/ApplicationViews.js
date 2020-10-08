import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { AnimalForm } from "./animal/AnimalForm"
import { AnimalDetail } from "./animal/AnimalDetail"
import { AnimalSearch } from "./animal/AnimalSearch"
// import { CustomersCard } from "./customer/CustomersCard.js"
import { CustomersProvider } from "./customer/CustomersProvider.js"
import { CustomersList } from "./customer/CustomersList.js"
// import { EmployeesCard } from "./employee/EmployeesCard.js"
import { EmployeesProvider } from "./employee/EmployeesProvider.js"
import { EmployeesList } from "./employee/EmployeesList.js"
import { EmployeesForm } from "./employee/EmployeesForm.js"
// import { LocationsCard } from "./location/LocationsCard.js"
import { LocationsProvider } from "./location/LocationsProvider.js"
import { LocationsList } from "./location/LocationsList.js"
import { LocationForm } from "./location/LocationsForm.js"
import { LocationDetail } from "./location/LocationsDetail.js"



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
                    <AnimalSearch />
                    <AnimalList />
                </Route>
            </AnimalProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <LocationsProvider>
                    <CustomersProvider>
                        <Route path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </CustomersProvider>
                </LocationsProvider>
            </AnimalProvider>

            <AnimalProvider>
                <LocationsProvider>
                    <CustomersProvider>
                        <Route path="/animals/detail/:animalId(\d+)">
                            <AnimalDetail />
                        </Route>
                    </CustomersProvider>
                </LocationsProvider>
            </AnimalProvider>

            {/* used in chapter 13 start*/}
            <AnimalProvider>
                <LocationsProvider>
                    <CustomersProvider>
                        <Route path="/animals/edit/:animalId(\d+)">
                            <AnimalForm />
                        </Route>
                    </CustomersProvider>
                </LocationsProvider>
            </AnimalProvider>
            {/* used in chapter 13 end */}






            {/* Render the locations list when http://localhost:3000/locations */}
            <LocationsProvider>
                <Route exact path="/locations">
                    <LocationsList />
                </Route>
            </LocationsProvider>

            <LocationsProvider>
                <CustomersProvider>
                    <AnimalProvider>
                        <Route exact path="/locations/create">
                            <LocationForm />
                        </Route>
                    </AnimalProvider>
                </CustomersProvider>
            </LocationsProvider>

            <LocationsProvider>
                <CustomersProvider>
                    <AnimalProvider>
                        <Route exact path="/locations/detail/:locationId(\d+)">
                            <LocationDetail />
                        </Route>
                    </AnimalProvider>
                </CustomersProvider>
            </LocationsProvider>









            {/* Render the customers list when http://localhost:3000/customers */}
            <CustomersProvider>
                <Route exact path="/customers">
                    <CustomersList />
                </Route>
            </CustomersProvider>

            {/* Render the employee list when http://localhost:3000/employees */}
            <EmployeesProvider>
                <LocationsProvider>
                    <Route path="/employees/create">
                        <EmployeesForm />
                    </Route>
                </LocationsProvider>
            </EmployeesProvider>

        </>
    )
}