import React, { useContext, useEffect, Fragment } from 'react'
import { CommentsContext } from '../Helpers/Contexts'

import { VerticalDivider, VerticalDividerContainer } from './Comment/VerticalDivider.styled'
import { CommentContainer } from './Containers/CommentContainer.style'
import { RepliesContainer } from './Containers/RepliesContainer.style'
import { ReplyCommentCard, WriteReplyCard } from './CardType'
import { VOTE } from '../Style/ConstantStyled'

const Replies = ({ comment, screen }) => {
  const { currentClickReplies, setCurrentClickReplies } = useContext(CommentsContext)


  const replyComponents = (comment) => {
    return comment["replies"].map((reply) => {
      return (
        <Fragment key={reply.id}>
          <ReplyCommentCard comment={comment} reply={reply} />
          {currentClickReplies.has(reply.id) && <WriteReplyCard comment={comment} reply={reply} />}
        </Fragment>

      )
    })
  }
  return (
    <RepliesContainer screen={screen}>
      <VerticalDividerContainer
              maxWidth={VOTE.sizes.width}
              fontSize={VOTE.sizes.font}
              text={comment.score}
               gridArea="divider">
        <VerticalDivider></VerticalDivider>
      </VerticalDividerContainer>
      <CommentContainer screen={screen} type="reply" gridArea="content" width="100%">
        {replyComponents(comment)}
      </CommentContainer>

    </RepliesContainer>
  )
}

export default Replies