import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Movie.css';
import { getMovie } from '../Functions/Fetch';
import Star from '../icons/star.png'
const IndividualMovie = () => {
    const { id }  = useParams();
    console.log(id)

    const [movie, setMovie] = useState({
        title: "",
        backdrop_path: "",
        overview: "",
        poster_path: "",
        tagline: "",
        vote_average: 0
    })

    useEffect(() => {
        getMovie(id, setMovie)
    }, [])

    console.log(movie)
    return (
        <div className="moviepage">
            <div>
                <img className="backdrop" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <p className="tagline">{`"${movie.tagline}"`}</p>

            </div>
            <div className="info">
                <div className="title2">
                    <h1>{movie.title}</h1>
                    <div className="rating">
                        <img src={Star} className='starpng' />
                        <p>{movie.vote_average}</p>
                    </div>
                  
                </div>
                <p>{movie.overview}</p>
            </div>

        </div>
    )
}

export default IndividualMovie
