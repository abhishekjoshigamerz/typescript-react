export type Priority  = 'high' | 'medium' | 'low';

export type NoteProps = {
    id:string,
    text: string,
    priority:Priority
}

export type NoteTypes = {
    id:string,
    text:string,
    priority:Priority
}