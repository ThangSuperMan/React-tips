import React, { ChangeEvent } from 'react'
import { Note } from '../redux/action'

interface NewNoteInputProps {
  addNote(note: Note): void
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState<Note>({
    id: 0,
    title: '',
    content: '',
  })

  const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('updateNote')
    const note: Note = {
      id: Date.now(),
      title: 'Note title',
      content: event.target.value,
    }
    setNote(note)
  }

  const onAddNoteClick = () => {
    console.log('note will be add to store :>> ', note)
    addNote(note)
    setNote({
      id: 0,
      title: '',
      content: '',
    })
  }

  return (
    <div>
      <input
        onChange={updateNote}
        value={note.content}
        type="text"
        name="note"
        placeholder="Note"
      />
      <button onClick={onAddNoteClick}>Add note</button>
    </div>
  )
}

export default NewNoteInput
