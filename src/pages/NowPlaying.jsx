import { useState, useEffect } from 'react'
import { getNowPlaying } from '../Functions/Fetch'
import '../Styles/Card.css'
import Card from '../components/Card';


const NowPlaying = () => {
    const [NowPlaying, setNowPlaying] = useState([])

    useEffect(() => {
        getNowPlaying(setNowPlaying)
    }, [])

    console.log(NowPlaying)

    return (
        <div className="movies">
            {NowPlaying.map((movie) => {
                return(
                    <Card movie={movie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default NowPlaying
