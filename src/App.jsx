import './App.css'
import { Content } from './components/Content/Content'
import { Header } from './components/Header/Header'
import { Nav } from './components/Navigate/Nav'
import { AsideBar } from './components/AsideBar/AsideBar'
import { Footer } from './components/Footer/Footer'
import { useState } from 'react'

export const App = () => {

    const [listState, setListState] = useState([])
    const [editState, setEditState] = useState(0)

    return (
        <div className="layout">
            <Header />
            <Nav />
            <Content
                listState={listState}
                setListState={setListState}
                editState={editState}
                setEditState={setEditState}
            />
            <AsideBar
                listState={listState}
                setListState={setListState}
            />
            <Footer />
        </div>
    )
}
