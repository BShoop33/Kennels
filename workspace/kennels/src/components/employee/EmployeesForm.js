import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationsProvider"
import { EmployeeContext } from "../employee/EmployeesProvider"
import { useHistory } from 'react-router-dom';
import "./Employees.css"

export const EmployeesForm = (props) => {
    const { addEmployee } = useContext(EmployeeContext)

    const { locations, getLocations } = useContext(LocationContext)
    const { employees, getEmployees } = useContext(EmployeeContext)

    /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
    const name = useRef(null)
    const locationId = useRef(null)
    const employeeID = useRef(null)

    /*
        Get animal state and location state on initialization.
    */
    useEffect(() => {
        getLocations().then(getEmployees)
    }, [])

    const constructNewEmployee = () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const name = name.current.value
        const locationId = parseInt(locationId.current.value)
        const employeeId = parseInt(employeeId.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            addEmployee({
                name,
                locationId,
                employeeId
            })
                .then(() => history.push("/employees"))
        }
    }

    const history = useHistory();

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={locationId} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeID">Assign an Employee ID: </label>
                    <input type="text" id="employeeID" ref={employeeID} required autoFocus className="form-control" placeholder="Employee ID" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}