import React from 'react'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="title"><h1>Movie Api</h1></div>
            <div className="navlinks">
                <ul>
                    <li>
                        <NavLink exact to="/popular"
                        className="link" activeClassName="activelink">
                        Popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/toprated"
                        className="link" activeClassName="activelink">
                        Top Rated
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/upcoming"
                        className="link" activeClassName="activelink">
                        Upcoming
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/now_playing"
                        className="link" activeClassName="activelink">
                        Now Playing
                        </NavLink>
                    </li>
                </ul>
            </div>
                        
        </div>
    )
}

export default Navbar
