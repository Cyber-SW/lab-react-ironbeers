import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "../Navbar"
import axios from "axios"

function BeerDetails(props) {
    const [specificBeer, setSpecificBeer] = useState(null)

    const { beerId } = useParams()

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then(response => {
                setSpecificBeer(response.data)
            })
    }, [beerId])

    return (
        <div>
            <Navbar />

            <img src={specificBeer?.image_url} alt="beer-img" width={100} />
            <h1>{specificBeer?.name}</h1>
            <h2>{specificBeer?.tagline}</h2>
            <h3>{specificBeer?.first_brewed}</h3>
            <h3>{specificBeer?.attenuation_level}</h3>
            <p>{specificBeer?.description}</p>
            <h3>{specificBeer?.contributet_by}</h3>
        </div>
    )
}

export default BeerDetails