import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider.js"
import { LocationsCard } from "./LocationsCard.js"
import "./Locations.css"

export const LocationsList = () => {
    // This state changes when `getEmployees()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationsList: useEffect - getLocations")
        getLocations()

    }, [])


    return (
        <div className="locations">
            {console.log("LocationsList: Render")}
            {
                locations.map(location => {
                    return <LocationsCard key={location.id} location={location} />
                })
            }
        </div>
    )
}