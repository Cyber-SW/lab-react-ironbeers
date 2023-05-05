import Navbar from "../Navbar"
import axios from "axios";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Beers() {
    const [beers, setBeers] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams()
    const [search, setSearch] = useState("")
    const name = searchParams.get("name")
    const navigate = useNavigate()
  
  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()

    navigate(`/beers?name=${search}`)
  }

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => {
                setBeers(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
            .then(response => {
                setBeers(response.data)
            })
      }, [search])

    return (
        <div>
            <Navbar />

            <h2>Search Beer</h2>
                <form onSubmit={handleSubmit}>
                    <input value={search} onChange={handleSearch}  />
                    <button type="submit">Search</button>
                </form>

        {beers?.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt="beer-img" width={100} />
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>Beer Details</Link>
                </div>
        ))}
        </div>
    )
}

export default Beers