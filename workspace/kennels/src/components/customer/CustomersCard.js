import React from "react"
import "./Customers.css"

export const CustomersCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__Address"><span class="customerAddress">Address:</span> {customer.address}</div>
        <div className="customer__emailAddress"><span class="customerEmailAddress">Email Address:</span> {customer.email}</div>
    </section>
)