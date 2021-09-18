import { useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { getSearch } from '../Functions/Fetch'
import '../Styles/Card.css'
import Card from '../components/Card';


const SearchResults = () => {
    const [SearchResults, setSearchResults] = useState([])
    const {title} = useParams();

    useEffect(() => {
        getSearch(title, setSearchResults)
    }, [title])

    console.log(SearchResults)

    return (
        <div className="movies">
            {SearchResults.map((movie) => {
                return(
                    <Card movie={movie} key={movie.id} />
                )
            })}
        </div>
    )
}

export default SearchResults
