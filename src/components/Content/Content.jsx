import { ListMovies } from "../ListMovies/ListMovies"

export const Content = ({listState, setListState, editState, setEditState}) => {
    return (
        <section className="content" id='content'>
            <ListMovies 
                listState={listState}
                setListState={setListState}
                editState={editState}
                setEditState={setEditState}
            />
        </section>
    )
}
