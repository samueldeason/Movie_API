import { useState, useEffect } from 'react'
import { getUpcoming } from '../Functions/Fetch'
import '../Styles/Card.css'
import Card from '../components/Card';


const Upcoming = () => {
    const [Upcoming, setUpcoming] = useState([])

    useEffect(() => {
        getUpcoming(setUpcoming)
    }, [])

    console.log(Upcoming)


    return (
        <div className="movies">
            {Upcoming.map((movie) => {
                return(
                    <Card movie={movie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default Upcoming
