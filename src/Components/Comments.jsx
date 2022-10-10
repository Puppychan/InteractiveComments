import React, {Fragment, useContext, useEffect} from 'react'
import { checkRepliesNotEmpty } from '../Controllers/CommentController'
import { CommentsContext } from '../Helpers/Contexts'

import Replies from './Replies'
import { ReadCommentCard, WriteReplyCommentCard, WriteCommentCard } from './CardType'
import { CommentContainer } from './Containers/CommentContainer.style'

const Comments = ({screen="desktop"}) => {
  const {comments, currentClickReplies, setCurrentClickReplies} = useContext(CommentsContext)
  return (
    <CommentContainer screen={screen}>
      {comments.map((comment) => {
        const isRepliesNotEmpty = checkRepliesNotEmpty(comment)
        return (
          <Fragment key={comment.id}>
            <ReadCommentCard comment={comment}/>
            {currentClickReplies.has(comment.id) &&  <WriteReplyCommentCard comment={comment}/>}
            {isRepliesNotEmpty && <Replies comment={comment}/>}
          </Fragment>
        )
      })}
      
      {/* write comment */}
      <WriteCommentCard />
    </CommentContainer>
  )
}

export default Comments