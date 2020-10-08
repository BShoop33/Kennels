import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom"

export const LocationsCard = ({ location }) => (
    <section className="location">
        <h3 className="locations__name">
            <Link to={`/locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
    </section>
)







// export const LocationsCard = ({ location }) => (
//     <section className="location">
//         <h3 className="location__name">{location.name}</h3>
//         <div className="location__address">Address:  {location.address}</div>
//     </section>
// )