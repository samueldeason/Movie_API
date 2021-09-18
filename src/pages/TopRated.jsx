import { useState, useEffect } from 'react'
import { getTopRated } from '../Functions/Fetch'
import '../Styles/Card.css'
import Card from '../components/Card';

const TopRated = () => {
    const [TopRated, setTopRated] = useState([])

    useEffect(() => {
        getTopRated(setTopRated)
    }, [])

    console.log(TopRated)

    

    return (
        <div className="movies">
            {TopRated.map((movie) => {
                return(
                    <Card movie={movie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default TopRated
