import { useState } from "react";
import { SaveOnStorage } from "../../helpers/SaveOnStorage";

export const Create = ({setListState}) => {
    const [movieState, setMovieState] = useState({
        title: '',
        description: ''
    })

    const { title, description } = movieState

    const getData = e => {
        e.preventDefault();

        const target = e.target
        const newTitle = target.title.value
        const newDescription = target.description.value

        const newMovie = {
            id: new Date().getTime(),
            title: newTitle,
            description: newDescription
        }

        setMovieState(newMovie)
        setListState((e) => {
            return [...e, newMovie]
        })

        SaveOnStorage('movies', newMovie)
    }

    return (
        <div className="add">
            <h3 className="title">Create Movie</h3>

            <strong>
                {(title && description) && 'Movie created succesfully: ' + title}
            </strong>

            <form onSubmit={getData}>
                <input type="text" placeholder="Title" name="title" />
                <textarea placeholder="Description" name="description"></textarea>
                <input type="submit" value="Save" name="save" />
            </form>
        </div>
    )
}
