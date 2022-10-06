import React, { useContext } from 'react'
import { CardContext, CommentsContext } from '../../Helpers/Contexts'
import * as constStyle from "../../Style/ConstantStyled"

import Vote from '../Vote/Vote'
import { H4, H5 } from '../../Style/GeneralStyled'
import Avatar from ".././Avatar/Avatar"
import OtherButtons from "./OtherButtons"
import YouTag from '.././Comment/YouTag'

const SideInfoComment = ({ isUser, handleEvent, type, index, writeCommentType }) => {
  const { comment, isEdit } = useContext(CardContext)
  const { currentUser } = useContext(CommentsContext)
  return (
    <>
      
      {writeCommentType == ""? (
        <>
          <Avatar gridArea="avatar" username={comment.user.username} />
          <Vote gridArea="vote" comment={comment} type={type} index={index} />
          <H4 gridArea="name" color={constStyle.COLORS.username} weight={constStyle.REGULAR_FONT}>{comment.user.username}</H4>
          <H5 gridArea="date" color={constStyle.COLORS.date} weight={constStyle.LIGHT_FONT}>{comment.createdAt}</H5>
          {isUser && <YouTag gridArea="you" />}
          {!isEdit && <OtherButtons gridArea="otherBtn" isUser={isUser} handleEvent={handleEvent} />}
        </>
      ) : (
        <Avatar gridArea="avatar" username={currentUser.username} />
      )}
    </>
  )
}

export default SideInfoComment