import { useState, useEffect } from 'react'
import { getUpcoming } from '../Functions/Fetch'
import '../Styles/Card.css'
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';
import IndividualMovie from './IndividualMovie';
import { NavLink } from 'react-router-dom';

const Upcoming = () => {
    const [Upcoming, setUpcoming] = useState([])

    useEffect(() => {
        getUpcoming(setUpcoming)
    }, [])

    console.log(Upcoming)


    return (
        <div className="movies">
            {Upcoming.map((movie: any) => {
                return(
                    <div className="card">
                        <NavLink exact to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="nope"/></NavLink>
                        <h1>{movie.title}</h1>
                        <div className="rating">
                            <StarOutlineSharpIcon />
                           <p>{movie.vote_average}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Upcoming
