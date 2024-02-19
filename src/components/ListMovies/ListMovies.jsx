import { useEffect } from 'react'
import { PeliItem } from '../PeliItem/PeliItem'

export const ListMovies = ({listState, setListState, editState, setEditState}) => {

    const getMovies = () => {
        const movies = JSON.parse(localStorage.getItem("movies"))
        setListState(movies)
        return movies
    }

    useEffect(() => {
        getMovies()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                listState != null
                    ? listState.map((m) =>
                        <PeliItem 
                            key={m.id} 
                            id={m.id} 
                            title={m.title} 
                            description={m.description} 
                            listState={listState}
                            setListState={setListState}
                            editState={editState}
                            setEditState={setEditState}
                            getMovies={getMovies}
                        />
                    )
                    : <h2>PLEASE CREATE SOME MOVIES</h2>
            }
        </>
    )
}
