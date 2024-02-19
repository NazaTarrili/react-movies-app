import { useState } from "react"

export const Search = ({ listState, setListState }) => {

    const [searchState, setSearchState] = useState('')
    const [notFoundState, setNotFoundState] = useState(false)

    const searchMovie = (e) => {
        setSearchState(e.target.value)

        let searchedMovies = null

        searchedMovies = listState.filter(movie => {
            return movie.title.toLowerCase().includes(searchState.toLowerCase())
        })

        if (searchState.length <= 1 || searchedMovies.length === 0) {
            searchedMovies = JSON.parse(localStorage.getItem('movies'))
            setNotFoundState(true)
        } else setNotFoundState(false)
            
        setListState(searchedMovies)
    }

    return (
        <div className="search">
            <h3 className="title" id='search' >Search</h3>
            <form>
                {(notFoundState === true && searchState.length > 1) && (
                    <span className="notFound">Searched movie are not found...</span>
                )}
                <input
                    type="text"
                    placeholder="Search..."
                    name="search"
                    autoComplete="off"
                    value={searchState}
                    onChange={searchMovie}
                />
            </form>
        </div>
    )
}
