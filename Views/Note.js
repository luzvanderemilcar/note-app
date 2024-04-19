import NoteHeader from "./NoteComponent";
import NoteBody from "./NoteComponent";
import NoteFooter from "./NoteComponent";

const NoteSchema = {
    id : {
        type : Number,
        required : true
        
    },
    title : String,
    author : String,
    content : String,
    creation : {
        date : Date,
        owner : String
    },
    modification : {
        state : Boolean,
        date : Date | undefined
    }
}


function Note({note}) {
    return (
        <div id={note.id}>
            <NoteHeader title={note.title}/>
            <Notebody content={note.content}/>
            <NoteFooter
                creationDate={note.creation.date}
                modificationState={note.modification.state}
                modificationDate={note.modification.date} />
            </div>
        )
}

export default Note