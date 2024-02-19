import { Search } from '../Search/Search'
import { Create } from '../Create/Create'

export const AsideBar = ({listState, setListState}) => {
  return (
    <aside className="asideBar">
        <Search listState={listState} setListState={setListState} />
        <Create setListState={setListState} />
      </aside>
  )
}
