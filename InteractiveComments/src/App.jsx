import { useState, useContext } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"

import Card from './Components/Card'

function App() {
  const [comments, setComments] = useState(JsonData.comments)
  
  return (
    <CommentsContext.Provider value={{comments, setComments}}>
      <GlobalStyled />
      <Card id={1} type="read"/>
    </CommentsContext.Provider>
  )
}

export default App
