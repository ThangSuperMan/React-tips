export type Action = { type: 'ADD_NOTE' | 'REMOVE_NOTE'; payload: Note }

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export interface Note {
  id: number
  title: string
  content: string
}

export const addNote = (note: Note): Action => ({
  type: ADD_NOTE,
  payload: note,
})

export const deleteNote = (note: Note): Action => ({
  type: REMOVE_NOTE,
  payload: note,
})
