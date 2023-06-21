import React from 'react'
import { Note } from '../redux/action'

interface NoteItemProps {
  note: Note
  removeNote(note: Note): void
}

const NoteItem: React.FC<NoteItemProps> = ({ note, removeNote }) => {
  console.log('NoteItem id :>> ', note.id)

  const onRemoveNoteClick = () => {
    console.log('onRemoveNoteClick ')
    removeNote(note)
  }

  return (
    <li key={note.id}>
      <span>{note.content} </span>
      <button onClick={onRemoveNoteClick}>Delete</button>
    </li>
  )
}

export default NoteItem
