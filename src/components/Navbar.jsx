import React, { useEffect, useState } from 'react'
import '../Styles/Navbar.css'
import { NavLink } from 'react-router-dom'
import SearchIcon from "../icons/searchicon.png";
import Menu from '../icons/menu.png'
import X from '../icons/x.png'

const Navbar = () => {

    const  [showMenu, setShowMenu ] = useState(false)
    const  [search, setSearch ] = useState(false)
    const [value, setValue] = useState('')


    useEffect(() => {

    }, [value])

    let menu; 
    let searchbar;

    if(showMenu){
        const body = document.getElementsByTagName('body')[0];
        body.style.height = '100%';
        body.style.overflow = 'hidden'
        menu = 
        <div className="sidemenu">
            <ul>
                    <li>
                        <NavLink exact to="/popular"
                         className='slink' activeClassName='alink'>
                        Popular
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/toprated"
                         className='slink' activeClassName='alink'>
                        Top-Rated
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/upcoming"
                         className='slink' activeClassName='alink'>
                        Upcoming
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/now_playing"
                         className='slink' activeClassName='alink'>
                        Now Playing
                        </NavLink>
                    </li>
                </ul>
        </div>
    }else{
        const body = document.getElementsByTagName('body')[0];
        body.style.height = '';
        body.style.overflow = ''
    }

    if(search){
        if(showMenu){
            setShowMenu(false)
        }
        searchbar =
        <div className='searchbar'>
            <input  type="text" placeholder='Search OnlyFilms' onChange={(e) => setValue(e.target.value)} />
            <NavLink exact to={`/search/${value}`}><img src={SearchIcon} className='cancelsearch' /></NavLink>

            <img src={X} className='cancelsearch' onClick={() => setSearch(!search)} />
        </div>
    }
    



    return (
        <div className="navbar">
            <img src={!showMenu ? Menu : X} className='burgermenu' onClick={() =>setShowMenu(!showMenu)} />
            <div className="title"><h1>OnlyFilms</h1></div>
            {menu}
            
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
                        Top-Rated
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
            <div className='mobilenav'>
                <img src={SearchIcon} className='search' onClick={() => setSearch(!search)} />

            </div>
            { searchbar }     
        </div>
    )
}

export default Navbar
