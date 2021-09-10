import { useState, useEffect } from 'react'
import { getTopRated } from '../Functions/Fetch'
import '../Styles/Card.css'
import { NavLink } from 'react-router-dom';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';

const TopRated = () => {
    const [TopRated, setTopRated] = useState([])

    useEffect(() => {
        getTopRated(setTopRated)
    }, [])

    console.log(TopRated)

    return (
        <div className="movies">
            {TopRated.map((movie: any) => {
                return(
                    <div className="card">
                        <NavLink exact to={`/movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="nope"/></NavLink>                        <h1>{movie.title}</h1>
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

export default TopRated
