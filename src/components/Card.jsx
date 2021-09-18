import React from 'react';
import { NavLink } from 'react-router-dom';
import Star from '../icons/star.png'


const Card = ({ movie }) => {

    const shorten = (string) => {
        if(string.length > 100){
            const shortened = string.substring(0, 100) + "..."
            return shortened
        }
        else{
            return string;
        }
    }

    return(
    <NavLink key={movie.id} className='link2' exact to={`/movie/${movie.id}`}>
    <div className="card">
        <img className='moviephoto' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /> 
        <div className='details'>                      
            <h1>{movie.title}</h1>
            <div className="rating">
                <img className='starpng' src={Star} />
                <p>{movie.vote_average}</p>
            </div>
            <p className='overview'>
                {shorten(movie.overview)}
            </p>
        </div>
    </div>
</NavLink>

    )
}

export default Card