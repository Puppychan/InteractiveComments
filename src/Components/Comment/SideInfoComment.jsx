import React, { useContext, useState, useEffect } from 'react'
import { CardContext, CommentsContext } from '../../Helpers/Contexts'
import * as constStyle from "../../Style/ConstantStyled"

import moment from "moment"

import Vote from '../Vote/Vote'
import { H4, P } from '../../Style/GeneralStyled'
import Avatar from ".././Avatar/Avatar"
import OtherButtons from "./OtherButtons"
import YouTag from '.././Comment/YouTag'

const SideInfoComment = ({ isUser, handleEvent, type, index, writeCommentType }) => {
  const { comment, isEdit } = useContext(CardContext)
  const { currentUser } = useContext(CommentsContext)
  const [duration, setDuration] = useState(comment ? moment(comment.createdAt).fromNow() : null)
  if (comment) {
    // update duration publish date
    useEffect(() => {
      setInterval(() => {
        setDuration(moment(comment.createdAt).fromNow())
      }, 60000);
    }, [])
    
  }
  

  return (
    <>
      
      {writeCommentType == ""? (
        <>
          <Avatar gridArea="avatar" username={comment.user.username} />
          <Vote gridArea="vote" comment={comment} type={type} index={index} />
          <P gridArea="name" color={constStyle.COLORS.username} weight={constStyle.REGULAR_FONT}>{comment.user.username}</P>
          <P gridArea="date" color={constStyle.COLORS.date} weight={constStyle.LIGHT_FONT}>{duration}</P>
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