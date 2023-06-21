import React from 'react'
import NewNoteInput from './components/NewNoteInput'
import { connect } from 'react-redux'
import { addNote, deleteNote, Note } from './redux/action'
import NoteItem from './components/NoteItem'
import './App.css'

interface AppProps {
  notes?: Note[]
  addNote?: (note: Note) => any
  removeNote?: (note: Note) => any
}

const App: React.FC<AppProps> = ({ notes, addNote, removeNote }) => {
  const onAddNote = (note: Note) => {
    console.log('onAddNote')
    if (addNote) {
      addNote(note)
    }
  }

  const onRemoveNote = (note: Note) => {
    console.log('onRemoveNote')
    if (removeNote) {
      removeNote(note)
    }
  }

  React.useEffect(() => {
    console.log('App comp just loaded!')
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
      <NewNoteInput addNote={onAddNote} />
      <ul>
        {notes?.map((note: Note) => {
          return <NoteItem note={note} removeNote={onRemoveNote} />
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return state
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addNote: (note: Note) => dispatch(addNote(note)),
    removeNote: (note: Note) => dispatch(deleteNote(note)),
  }
}

// Connect to store and using mapStateToProps to passing the state of
// store to the App component -> your App component will receive the props
export default connect(mapStateToProps, mapDispatchToProps)(App)
