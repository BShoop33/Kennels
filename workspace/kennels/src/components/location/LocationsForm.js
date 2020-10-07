import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationsProvider"
import { useHistory } from 'react-router-dom';
import "./Locations.css"

export const LocationForm = (props) => {

    const { locations, getLocations, addLocations } = useContext(LocationContext)


    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const address = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        getLocations()
    }, [])

    const constructNewLocation = () => {

        addLocations({
            name: name.current.value,
            address: address.current.value
        })
            .then(() => history.push("/locations"))

    }

    const history = useHistory();

    return (
        <form className="animalForm">
            <h2 className="animalForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" ref={name} required autoFocus className="form-control" placeholder="Location name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Address: </label>
                    <input type="text" id="locationAddress" ref={address} required autoFocus className="form-control" placeholder="Location address" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewLocation()
                }}
                className="btn btn-primary">
                Save Location
            </button>
        </form>
    )
}