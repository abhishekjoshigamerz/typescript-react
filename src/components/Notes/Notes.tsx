import './notes.css';


import Card from '../Card/Card';
import {FaTrash,FaEdit} from 'react-icons/fa';
export type Priority  = 'high' | 'medium' | 'low'; 
export type NoteProps = {
    id:string,
    text: string,
    priority:Priority,
    editNote:(id:string)=>void,
    deleNote:(id:string)=>void
}



const Notes=(props: NoteProps)=>{

    return (
     
        <Card>
            <>
        <div className={`${props.priority}`}>
           
            <p>{props.text}</p>
        </div>
        <div>
            <div>
                <FaEdit onClick={()=>props.editNote(props.id)}></FaEdit>
                <FaTrash onClick={()=>props.deleNote(props.id)}></FaTrash>
            </div>
        </div>
        </>
        </Card>
       
    );
}

export default Notes;