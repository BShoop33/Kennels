import React from "react"
import "./Customers.css"

export const CustomersCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <div className="customer__addres"><span class="customerAddress">Address:</span> {customer.address}</div>
    </section>
)