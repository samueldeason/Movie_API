import { useState, useEffect } from 'react'
import { getNowPlaying } from '../Functions/Fetch'
import '../Styles/Card.css'
import { NavLink } from 'react-router-dom';
import StarOutlineSharpIcon from '@material-ui/icons/StarOutlineSharp';

const NowPlaying = () => {
    const [NowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        getNowPlaying(setNowPlaying)
    }, [])

    console.log(NowPlaying)

    return (
        <div className="movies">
            {NowPlaying.map((movie: any) => {
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

export default NowPlaying
