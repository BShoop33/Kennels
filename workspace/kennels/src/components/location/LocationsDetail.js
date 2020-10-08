import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationsProvider"
import "./Locations.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {

    const { deleteLocation, getLocationById } = useContext(LocationContext)

    const [location, setLocation] = useState({})

    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
            .then((response) => {
                setLocation(response)
            })
    }, [])


    /*the ? after the animal object name below just says not to error out if the property specified isn't found*/
    return (
        <section className="locationDetail">
            <h3 className="location__name">{location.name}</h3>
            <div className="animal__owner">Address: {location.address}</div>
            <button class="locationDeleteButton" onClick={
                () => {
                    setTimeout(function () {
                        deleteLocation(location.id)
                            .then(() => {
                                history.push("/locations")
                            })
                    }, 1500)

                }}>Delete Location
            </button>
        </section>
    )
}