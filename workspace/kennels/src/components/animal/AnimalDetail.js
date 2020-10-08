import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)
    const [animal, setAnimal] = useState({})
    const [location, setLocation] = useState({})
    const [customer, setCustomer] = useState({})
    const history = useHistory();
    const { animalId } = useParams();

    useEffect(() => {
        console.log("useEffect", animalId)
        getAnimalById(animalId)
            .then((response) => {
                setAnimal(response)
                setLocation(response.location)
                setCustomer(response.customer)
            })
    }, [])



    /*the ? after the animal object name below just says not to error out if the property specified isn't found*/
    return (
        <section className="animal">
            <h3 className="animal__name">{animal?.name}</h3>
            <div className="animal__breed">Breed:  {animal?.breed}</div>
            <div className="animal__location">Location: {location?.name}</div>
            <div className="animal__owner">Customer: {customer?.name}</div>
            <button onClick={
                () => {
                    setTimeout(function () {
                        releaseAnimal(animal.id)
                            .then(() => {
                                history.push("/animals")
                            })
                    }, 1500)

                }}>Release Animal
            </button>

            {/* used in chapter 13 start*/}
            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
            {/* used in chapter 13 end */}

        </section>
    )
}


