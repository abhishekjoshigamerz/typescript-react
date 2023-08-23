
import './App.css';
import Notes from './components/Notes/Notes';
import { NotesData } from './components/data';
import AddNotes from './components/AddNotes/AddNotes';
import { NoteTypes } from './components/notes-props';
import {useState} from 'react';
function App() {

  const [notes,setNotesData] = useState(NotesData);
  const [editMode,setEditMode] = useState(false);
  const [noteToBeEdited,setNoteToBeEdited] = useState<NoteTypes | null>(null);

  const addNote = (note: NoteTypes)=>{
    setNotesData([note,...notes])
  }
  
  const editNode = (id:string)=>{
    console.log(id);
    setEditMode(true);
    const note = notes.find(note=>note.id===id);
    if(note){
      setNoteToBeEdited(note);
    }
  }

  const updateNote = (updatedNote:NoteTypes)=>{
    const index = notes.findIndex(note=>note.id===updatedNote.id);
    let editedNotes = [...notes];
     editedNotes.splice(index,1,updatedNote);
     setNotesData(editedNotes);
     setEditMode(false);

  }

  
  const deleteNode = (id:string)=>{
    console.log(id);
    const index = notes.findIndex(notes=>notes.id===id)
    let editedNotes = [...notes];
    editedNotes.splice(index,1);
    setNotesData(editedNotes);
  }

  return (
    <div className="App">
      Notes App
      <AddNotes addNote={addNote} editMode={editMode} noteToBeEdited={noteToBeEdited} updateNote={updateNote}/>
     {
      notes.map(note=><Notes id={note.id} priority={note.priority} key={note.id}  text={note.text} editNote={editNode} deleNote={deleteNode} />)
     }
     
    </div>
  );
}

export default App;
