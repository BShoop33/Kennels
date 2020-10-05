import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal_breed"><span class="breedStyling">Breed:</span>  {animal.breed}</div>
        <div className="animal_customer"><span class="customerStyling">Customer ID:</span>  {animal.customerId}</div>
    </section>
)