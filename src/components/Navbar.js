import React from 'react'
import { Link , NavLink} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
export default function Navbar() {

    const fav = (useSelector((state) => state.favourite.counter))
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {/* //NavLink active class */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink
                            to="/Favourite"
                            exact activeClassName="activeLink" 
                        >Favourite {fav}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/Movies"
                            exact activeClassName="activeLink" 
                        >Movies</NavLink>
                       
                    </li>

                    
                </ul>

            </div>
        </nav>
    )
}
