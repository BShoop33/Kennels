import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeesProvider"
import { EmployeesCard } from "./EmployeesCard"
import { useHistory } from "react-router-dom"
import "./Employees.css"

export const EmployeesList = () => {
    // This state changes when `getEmployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const history = useHistory()
    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("EmployeesList: useEffect - getEmployees")
        getEmployees()

    }, [])

    return (
        <>
            <h2>Employees</h2>
            <button onClick={() => { history.push("/employees/create") }}>
                Add Employee
            </button>
            <div className="employees">
                {
                    employees.map(e => {
                        return <EmployeesCard key={e.id} employee={e} />
                    })
                }
            </div>
        </>
    )
}
    //     return (


    //         <div className="employees">
    //             {console.log("EmployeesList: Render")}
    //             {
    //                 employees.map(employee => {
    //                     return <EmployeesCard key={employee.id} employee={employee} />
    //                 })
    //             }
    //         </div>
    //     )
    // }