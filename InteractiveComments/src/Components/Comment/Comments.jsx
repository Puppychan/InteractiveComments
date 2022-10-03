import React, {useContext} from 'react'
import { checkRepliesNotEmpty } from '../../Controllers/CommentController'
import { CommentsContext } from '../../Helpers/Contexts'

import Replies from './Replies'
import Card from "../Card"
import { CommentContainer } from '../Containers/CommentContainer.style'

const Comments = () => {
  const {comments} = useContext(CommentsContext)
  

  return (
    <CommentContainer>
      {comments.map((comment) => {
        const isRepliesNotEmpty = checkRepliesNotEmpty(comment)
        return (
          <>
            <Card key={comment.id} id={comment.id} type="read"/>
            {isRepliesNotEmpty && <Replies comment={comment}/>}
          </>
        )
      })}
      
      
    </CommentContainer>
  )
}

export default Comments