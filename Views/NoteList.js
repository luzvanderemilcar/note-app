import NotePreview from "./NoteComponent";

function NoteList({notes}) {
    return (
    <>
        {notes.map((note) => (
            <NotePreview note={note} />
        )
        )}
    </>
)}

export default NoteList