import { useState, useContext } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"

import Card from './Components/Card'

function App() {
  const [comments, setComments] = useState(JsonData.comments)
  const currentUser = JsonData.currentUser
  const commentComponents = () => {
    return comments.map((comment) => {
      
      return <Card id={comment.id} type="read"/>
    })
  }
  const replyComponents = (comment) => {
    if (comment.replies) {
      return comment.replies.map((reply) => {
        return <Card id={reply.id} replies={comment.replies} type="reply"/>
      })
    }
  }
  return (
    <CommentsContext.Provider value={{comments, setComments, currentUser}}>
      <GlobalStyled />
      {commentComponents()}
      {replyComponents(comments[1])}
    </CommentsContext.Provider>
  )
}

export default App
