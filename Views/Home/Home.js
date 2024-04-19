import NoteList from "/Views/NoteList.js";
import MenuBar from "/NavigationComponent/MenuBar.js";

function Home({ notes, showOptions, searchChange, showAccount }) {

    return (
        <div>
            <NavBar />
            <MenuBar/>
            <NoteList notes={notes}/>
        </div>
    )
}