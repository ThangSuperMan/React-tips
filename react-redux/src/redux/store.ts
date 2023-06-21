import { legacy_createStore as createStore } from 'redux'
import { ADD_NOTE, REMOVE_NOTE, Note, Action } from './action'

export interface NotesState {
  notes: Note[]
}

const initState: { notes: Note[] } = {
  notes: [
    {
      id: Date.now(),
      title: 'First note titlet',
      content: 'First note content',
    },
  ],
}

const notesReducer = (state: NotesState = { notes: [] }, action: Action) => {
  switch (action.type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload] }
    case REMOVE_NOTE:
      const notes = state.notes.filter(
        (note: Note) => note.id !== action.payload.id
      )
      return { ...state, notes }
    default:
      return state
  }
}

export const store = createStore(notesReducer)
