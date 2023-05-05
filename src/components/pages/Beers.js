import Navbar from "../Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Beers() {
    const [beers, setBeers] = useState(null)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    return (
        <div>
            <Navbar />

        {beers?.map((beer) => (
                <div>
                    <img src={beer.image_url} alt="beer-img" width={100} />
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.contributed_by}</p>
                    <Link to="/beers/:beerId">Beer Details</Link>
                </div>
        ))}
        </div>
    )
}

export default Beers