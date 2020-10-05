import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationContext = createContext()

/*
 This component establishes what data can be used.
 */
export const LocationsProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then(setLocations)
    }

    const addLocations = location => {
        return fetch("http://localhost:8088/locations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
            .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )
}