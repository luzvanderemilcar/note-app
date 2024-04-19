function NoteFooter({creationDate, modificationState, modificationDate, author}) {
    return (
    <>
        <p>{creationDate}</p>
        {modificationState && <p>{modificationDate}</p>}
        <p>{author}</p>
    </>
    )
}

export default NoteFooter;