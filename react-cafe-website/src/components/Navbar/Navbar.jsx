import "./Nav-bar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
    return (
        <>
        <nav>
        <div className="brand-logo">
            <img width="50px" height="40px" src="/logo.png" alt="Cafe Logo" />
            <h3>Full House Cafe</h3>
        </div>

        <div className="links-container"> 
            <NavLink >Home</NavLink>
            <NavLink >About</NavLink>
            <NavLink >Menu</NavLink>
            <NavLink >Contact</NavLink>  
        </div>

        <div className="button-container">
            <button className="direction-button">Get Direction</button>
        </div>

        </nav>
        
        
        
        </>
    )

} 

export default Navbar;