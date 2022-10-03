import React from 'react'

import { VerticalDivider } from './VerticalDivider.styled'
import { CommentContainer } from '../Containers/CommentContainer.style'
import { RepliesContainer } from '../Containers/RepliesContainer.style'
import Card from '../Card'

const Replies = ({comment}) => {
    const replyComponents = (comment) => {
        return comment["replies"].map((reply) => {
          return <Card key={reply.id} id={reply.id} replies={comment.replies} type="reply" />
        })
      }
  return (
    <RepliesContainer>
        <VerticalDivider gridArea="divider" />
        <CommentContainer type="reply" gridArea="card">
          {replyComponents(comment)}
        </CommentContainer>
    </RepliesContainer>
  )
}

export default Replies