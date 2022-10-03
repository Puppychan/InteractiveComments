import React, { useContext, useMemo, useState, useRef, useEffect } from 'react'

import { CommentsContext } from "../Helpers/Contexts"
import { findIndexById, findParentIndexByReplyId } from "../Controllers/CommentController"

import * as constStyle from "../Style/ConstantStyled"

import { TextArea } from './Comment/TextArea.style'
import ConfirmButton from './Buttons/ConfirmButton'
import { CardContainer } from './Containers/CardContainer.style'
import { H4, H5, P } from '../Style/GeneralStyled'
import Vote from './Vote/Vote'
import Avatar from "./Avatar/Avatar"
import OtherButton from './Buttons/OtherButton'
import YouTag from './Comment/YouTag'
import ReplyTag from './Comment/ReplyTag'

const Card = ({ id, type, replies = [], isWriteComment = false }) => {
  // isUser for checking if this comment belongs to the user
  // context
  const { comments, setComments, currentUser } = useContext(CommentsContext)
  const [isEdit, setIsEdit] = useState(false)
  const contentRef = useRef(null)
  // index of that comments
  const index = useMemo(() => findIndexById(type == "reply" ? replies : comments, id))
  const [comment, setComment] = useState(type == "reply" ? replies[index] : comments[index])

  const isUser = comment.user.username.localeCompare(currentUser.username) == 0
  const defaultTemplate = !isUser ? "peopleComment" : "userComment"
  const [template, setTemplate] = useState(defaultTemplate)

  useEffect(() => {
    const newComments = [...comments]
    if (type == "reply") {
      const parentCommentIndex = findParentIndexByReplyId(comments, id)
      newComments[parentCommentIndex].replies[index] = comment
    }
  }, [comment])
  

  const edit = () => {
    setIsEdit(true)
    setTemplate("updateComment")
  }
  const submit = () => {
    setIsEdit(false)
    setTemplate(defaultTemplate)
    // edit comment
    setComment({...comment, content: contentRef.current.value})
    
  }

  return (
    <CardContainer type={type} template={template}>
      <Vote gridArea="vote" index={index} />
      <Avatar gridArea="avatar" username={comment.user.username} />
      <H4 gridArea="name" color={constStyle.COLORS.username} weight={constStyle.REGULAR_FONT}>{comment.user.username}</H4>
      <H5 gridArea="date" color={constStyle.COLORS.date} weight={constStyle.LIGHT_FONT}>{comment.createdAt}</H5>

      {!isEdit ? (
        <>
          <P gridArea="content" color={constStyle.COLORS.content}>
            {type == "reply" && <ReplyTag replyTo={comment.replyingTo} />}
            {comment.content}
          </P>
          {!isUser ? (
            <OtherButton type={constStyle.BUTTONS.reply}
              gridArea="reply"
              onClick={() => { console.log("hello") }} />
          ) : (
            <>
              <YouTag gridArea="you" />
              <OtherButton type={constStyle.BUTTONS.edit}
                gridArea="edit"
                onClick={edit} />
              <OtherButton type={constStyle.BUTTONS.delete}
                gridArea="delete"
                onClick={() => { console.log("hello") }} />
            </>
          )}
        </>
      ) : (
        <>
          <form action="" onSubmit={submit} id="form-card"></form>
          {isUser && <YouTag gridArea="you" />}
          <TextArea ref={contentRef} gridArea="content" defaultValue={comment.content} style={constStyle.TEXTAREA} />
          <ConfirmButton text="update" gridArea="btn" form="form-card"/>
        </>
      )}





    </CardContainer>
  )
}

export default Card