import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const EmployeeContext = createContext()

/*
 This component establishes what data can be used.
 */
export const EmployeesProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/employees")
            .then(res => res.json())
            .then(setEmployees)
    }

    const addEmployees = employee => {
        return fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
            .then(getEmployees)
    }

    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}