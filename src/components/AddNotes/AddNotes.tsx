import {useState, useEffect} from 'react';
import { NoteTypes ,Priority} from '../notes-props';
import { v4 as uuidv4 } from 'uuid';
type AddNoteProps = {
    addNote: (note:NoteTypes) => void,
    editMode:boolean,
    noteToBeEdited:NoteTypes | null,
    updateNote: (updatedNote:NoteTypes) => void,
}

const AddNotes = (props:AddNoteProps)=>{
    const defaultPriority: "low"| "medium" | "high" = "low";
    const [text,setText] = useState("");
    const [priority,setPriority] = useState<Priority>('low');
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{  
        console.log(e.target.value);
        setText(e.target.value);
    }


    useEffect(()=>{
        if(props.noteToBeEdited && props.editMode){
            setNodeContent(props.noteToBeEdited);
        }
        
    },[props.noteToBeEdited,props.editMode])


    const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{


        e.preventDefault();
        if(props.editMode){
           props.noteToBeEdited && props.updateNote({
                text,
                priority,
                id:props.noteToBeEdited.id
            })
        }else{
            props.addNote({
                text,
                priority,
                id:uuidv4()
            })
        }
        
       
        setText('');
        setPriority('low');
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value);
        setPriority(e.target.value as Priority);
    }


    const setNodeContent = (note:NoteTypes)=>{
        setText(note.text);
        setPriority(note.priority);

    }
  

    return (
        <form>
            <input type="text"  onChange={handleChange} value={text}/>
            <select onChange={e=>handleSelectChange(e)} value={priority}>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            <button onClick={e=>handleClick(e)}>
               {props.editMode ? 'Edit' : 'Add'}  
            </button>
        </form>
    )

}   

export default AddNotes;