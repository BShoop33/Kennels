import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationsProvider"
import { LocationsCard } from "./LocationsCard"
import { useHistory } from "react-router-dom"
import "./Locations.css"

export const LocationsList = () => {
    // This state changes when `getEmployees()` is invoked below
    const { locations, getLocations } = useContext(LocationContext)
    const history = useHistory()

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("LocationsList: useEffect - getLocations")
        getLocations()

    }, [])

    return (
        <>

            <h2>Locations</h2>
            <button onClick={() => { history.push("/locations/create") }}>
                Add Location
                </button>
            <div className="locations">
                {
                    locations.map(location => {
                        return <LocationsCard key={location.id} location={location} />
                    })
                }
            </div>
        </>
    )
}
