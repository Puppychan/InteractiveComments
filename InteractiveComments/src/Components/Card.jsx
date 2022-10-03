import React, { useContext, useMemo, useState } from 'react'

import { CommentsContext } from "../Helpers/Contexts"
import { findIndexById } from "../Controllers/CommentController"

import * as constStyle from "../Style/ConstantStyled"

import { CardContainer } from './Containers/CardContainer.style'
import { H4, H5, P } from '../Style/GeneralStyled'
import Vote from './Vote/Vote'
import Avatar from "./Avatar/Avatar"
import OtherButton from './Buttons/OtherButton'

const Card = ({id, type}) => {
  // context
  const { comments, setComments } = useContext(CommentsContext)
  // index of that comments
  const index = useMemo(() => findIndexById(comments, id))
  
  const comment = comments[index]
  return (
    <CardContainer type={type}>
        <Vote index={index} />
        <Avatar username={comment.user.username}/>
        <H4 gridArea="name" color={constStyle.COLORS.username} weight={constStyle.REGULAR_FONT}>{comment.user.username}</H4>
        <H5 gridArea="date" color={constStyle.COLORS.date} weight={constStyle.LIGHT_FONT}>{comment.createdAt}</H5>
        <P gridArea="content" color={constStyle.COLORS.content}>{comment.content}</P>
        <OtherButton type={constStyle.BUTTONS.reply}
          gridArea="reply" 
          onClick={() => {console.log("hello")}}/>
    </CardContainer>
  )
}

export default Card