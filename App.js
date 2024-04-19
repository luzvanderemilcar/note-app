import {useState, useEffect} from 'react';
import Note from './Views/Note.js';
import NoteList from './Views/NoteList.js';

function App() {
    
    const [notes, setNote] = useState();
    
    // add a note
    const addNote = (note) => {
        
        setNote(notes.push(note))
    }
    
    return (
        <div>
            <NavBar/>
            <NoteList notes={notes} />
            <NewNoteButton newNoteClick={newNoteClick} />
        </div>
        )
}

const root = createRoot(document.querySelector("#note-app"));
