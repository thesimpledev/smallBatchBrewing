import React from 'react'
import FormContainer from './components/FormContainer'
import GrainFormContainer from "./components/GrainFormContainer"
import { Provider } from "react-redux"
import Store from './store'
import './App.css'

function App() {
  return (
    <Provider store={ Store }>
      <div className="App">
        <FormContainer />
        <GrainFormContainer />
      </div>
    </Provider>
  )
}

export default App;