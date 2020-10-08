import React from "react"
import "./Animal.css"
import { Link } from "react-router-dom"


// export const AnimalCard = ({ animal }) => (
//     <section className="animal">
//         <h3 className="animal__name">{animal.name}</h3>
//         <div className="animal_breed"><span class="breedStyling">Breed:</span>  {animal.breed}</div>
//         <div className="animal_customer"><span class="customerStyling">Customer ID:</span>  {animal.customerId}</div>
//     </section>
// )


export const AnimalCard = ({ animal }) => (
    <section className="animal">
        <Link class="animalName" to={`/animals/detail/${animal.id}`}>
            {animal.name}
        </Link>
    </section>
)