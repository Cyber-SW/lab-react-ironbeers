import { NavLink } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <NavLink className="navbar" to="/"><button>Home</button></NavLink>
        </nav>
    )
}

export default Navbar