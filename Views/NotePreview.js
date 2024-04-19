function NotePreview({note}) {
    
    return (
        <div noteId={note.id}>
            <div>
                <h4>{note.title}</h4>
                <p>{note.content.slice(0, 50).concat("...")}</p>
                <p className="note-preview-info">{
                    note.modification.state ? modification.date:creation.date
                }</p>
            </div>
            <div>
                <EditNoteButton onClick={editNote(note.id)} />
            </div>
        </div>
        )
}

export default NotePreview