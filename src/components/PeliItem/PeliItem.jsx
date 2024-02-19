import { EditMovie } from "../EditMovie/EditMovie"

export const PeliItem = ({
    id,
    title,
    description,
    listState,
    setListState,
    editState,
    setEditState,
    getMovies
}) => {

    const deleteMovie = (id) => {
        const newMoviesArray = listState.filter((movie) => movie.id !== parseInt(id))
        setListState(newMoviesArray)
        localStorage.setItem("movies", JSON.stringify(newMoviesArray))
    }

    const editMovie = (id) => setEditState(id)

    return (
        <article key={id} className="peli-item">
            <h3 className="title">{title}</h3>
            <p className="descripcion">{description}</p>

            <button className="edit" onClick={() => editMovie(id)} >Edit</button>
            <button className="delete" onClick={() => deleteMovie(id)} >Delete</button>

            {/** Formulario Editar */}
            {editState === id && (
                <EditMovie
                    id={id}
                    title={title}
                    description={description}
                    getMovies={getMovies}
                    setEditState={setEditState}
                    setListState={setListState}
                />
            )}

        </article>
    )
}
