import Navbar from "../Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function RandomBeerPage() {
    const [randomBeer, setRandomBeer] = useState(null)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                setRandomBeer(response.data)
            })
    }, [])

    
    return (
        <div>
            <Navbar />

            <img src={randomBeer?.image_url} alt="beer-img" width={100} />
            <h1>{randomBeer?.name}</h1>
            <h2>{randomBeer?.tagline}</h2>
            <h3>{randomBeer?.first_brewed}</h3>
            <h3>{randomBeer?.attenuation_level}</h3>
            <p>{randomBeer?.description}</p>
            <h3>{randomBeer?.contributet_by}</h3>
        </div>
    )
}

export default RandomBeerPage