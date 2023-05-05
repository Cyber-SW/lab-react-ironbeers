import Navbar from "../Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function NewBeerPage() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    const navigate = useNavigate()

    const handleNameChange = (e) => setName(e.target.value)
    const handleTaglineChange = (e) => setTagline(e.target.value)
    const handleDescriptionChange = (e) => setDescription(e.target.value)
    const handleFirstBrewedChange = (e) => setFirstBrewed(e.target.value)
    const handleBrewersTipsChange = (e) => setBrewersTips(e.target.value)
    const handleAttenuationLevelChange = (e) => setAttenuationLevel(e.target.value)
    const handleContributedByChange = (e) => setContributedBy(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = { name: name, tagline: tagline, description: description, first_brewed: first_brewed, brewers_tips: brewers_tips, attenuation_level: attenuation_level, contributed_by: contributed_by }

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                setName("")
                setTagline("")
                setDescription("")
                setFirstBrewed("")
                setBrewersTips("")
                setAttenuationLevel(0)
                setContributedBy("")

                navigate("/beers")
            })
    }


    return (
        <div>
            <Navbar />

            <h3>Add New Beer</h3>
      
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" onChange={handleNameChange} value={name}/>

                <label>Tagline</label>
                <input type="text" name="Tagline" onChange={handleTaglineChange} value={tagline}/>
                
                <label>Description</label>
                <input type="text" name="Desciption" onChange={handleDescriptionChange} value={description} />

                <label>First Brewed</label>
                <input type="text" name="First Brewed" onChange={handleFirstBrewedChange} value={first_brewed}/>

                <label>Brewers Tips</label>
                <input type="text" name="Brewers Tips" onChange={handleBrewersTipsChange} value={brewers_tips}/>
                
                <label>Attenuation Level</label>
                <input type="number" name="Attenuation Level" onChange={handleAttenuationLevelChange} value={attenuation_level} />

                <label>Contributed By</label>
                <input type="text" name="Contributed By" onChange={handleContributedByChange} value={contributed_by} />

                <button type="submit">Create New Beer</button>
            </form>
        </div>
    )
}

export default NewBeerPage