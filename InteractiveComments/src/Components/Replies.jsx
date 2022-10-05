import React from 'react'

import { VerticalDivider, VerticalDividerContainer } from './Comment/VerticalDivider.styled'
import { CommentContainer } from './Containers/CommentContainer.style'
import { RepliesContainer } from './Containers/RepliesContainer.style'
import Card from './Card'

const Replies = ({comment}) => {
    const replyComponents = (comment) => {
        return comment["replies"].map((reply) => {
          return <Card gridArea="card" key={reply.id} id={reply.id} replies={comment.replies} type="reply" />
        })
      }
  return (
    <RepliesContainer>
        <VerticalDividerContainer width="20%">
        <VerticalDivider></VerticalDivider>
        </VerticalDividerContainer>
    <CommentContainer type="reply">
          {replyComponents(comment)}
        </CommentContainer>
        
    </RepliesContainer>
  )
}

export default Replies