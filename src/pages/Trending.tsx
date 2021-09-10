import { useState, useEffect } from 'react'
import { getPopular } from '../Functions/Fetch'
import '../Styles/Card.css'
import { NavLink } from 'react-router-dom';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';

const Trending = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getPopular(setTrending)
    }, [])

    console.log(trending)

    return (
        <div className="movies">
            {trending.map((movie: any) => {
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

export default Trending
