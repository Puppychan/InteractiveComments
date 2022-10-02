import { useState, useContext } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"
import Vote from './Components/Vote/Vote'

function App() {
  const [comments, setComments] = useState(JsonData.comments)
  
  return (
    <CommentsContext.Provider value={{comments, setComments}}>
      <GlobalStyled />
      <Vote id={1} score={JsonData.comments[0].score}></Vote>
    </CommentsContext.Provider>
  )
}

export default App
