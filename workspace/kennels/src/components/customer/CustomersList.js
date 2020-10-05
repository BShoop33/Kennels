import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomersProvider"
import { CustomersCard } from "./CustomersCard"
import "./Customers.css"

export const CustomersList = () => {
    // This state changes when `getCustomers()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

    //useEffect - reach out to the world for something
    useEffect(() => {
        console.log("CustomersList: useEffect - getCustomers")
        getCustomers()

    }, [])


    return (
        <div className="customers">
            {console.log("CustomersList: Render")}
            {
                customers.map(customer => {
                    return <CustomersCard key={customer.id} customer={customer} />
                })
            }
        </div>
    )
}