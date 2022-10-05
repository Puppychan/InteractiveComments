import { useState, useContext } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"

import Comments from "./Components/Comments"

function App() {
  const [comments, setComments] = useState(JsonData.comments)
  const [currentClickReplies, setCurrentClickReplies] = useState(new Set())
  const currentUser = JsonData.currentUser

  return (
    <CommentsContext.Provider value={{comments, setComments, currentUser, currentClickReplies, setCurrentClickReplies}}>
      <GlobalStyled />
      <Comments />
    </CommentsContext.Provider>
  )
}

export default App
