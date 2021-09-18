import { useState, useEffect } from 'react'
import { getPopular } from '../Functions/Fetch'
import '../Styles/Card.css'
import Card from '../components/Card';

const Trending = () => {
    const [trending, setTrending] = useState([])

    useEffect(() => {
        getPopular(setTrending)
    }, [])

    console.log(trending)

    return (
        <div className="movies">
            {trending.map((movie) => {
                return(
                    <Card movie={movie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default Trending
