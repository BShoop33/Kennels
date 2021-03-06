import React from "react"
import "./Employees.css"

export const EmployeesCard = ({ employee }) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <div className="employee_telephone"><span class="employeePhone">Employee Telephone:</span> {employee.telephone}</div>
        <div className="employee__identification"><span class="employeeId">Employee ID:</span> {employee.employeeId}</div>
    </section>
)