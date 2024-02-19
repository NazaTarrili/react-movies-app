export const EditMovie = ({id, title, description, getMovies, setEditState, setListState}) => {
    const titleComponent = 'EDIT MOVIE'

    const updateMovie = (e, id) => {
        e.preventDefault()

        const target = e.target

        const movies = getMovies()
        
        const index = movies.findIndex(movie => movie.id === id)

        let movie = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        movies[index] = movie

        localStorage.setItem('movies', JSON.stringify(movies))
        setListState(movies)
        setEditState(0)
    }

    return (
        <div className="editForm">
            <h3 className="title">{titleComponent}</h3>
            <form onSubmit={ e => updateMovie(e, id) }>
                <input
                    type="text"
                    name="title"
                    className="editedTitle"
                    defaultValue={title}
                    placeholder="Set new title..."
                />
                <textarea
                    name="description"
                    defaultValue={description}
                    className="editedDescription"
                    placeholder="Set new description..."
                />
                <input type="submit" className="update" value="update" />
            </form>
        </div>
    )
}
