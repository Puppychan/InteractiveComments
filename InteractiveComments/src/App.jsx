import { useState, useContext } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"

import Comments from "./Components/Comment/Comments"

function App() {
  const [comments, setComments] = useState(JsonData.comments)
  const currentUser = JsonData.currentUser

  return (
    <CommentsContext.Provider value={{comments, setComments, currentUser}}>
      <GlobalStyled />
      <Comments />
    </CommentsContext.Provider>
  )
}

export default App
