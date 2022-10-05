import React, { useContext, useState, useEffect } from 'react'
import { CardContext, CommentsContext } from '../../Helpers/Contexts'
import { findParentIndexByReplyId } from "../../Controllers/CommentController"

import * as constStyle from "../../Style/ConstantStyled"

import { P } from '../../Style/GeneralStyled'
import ReplyTag from '.././Comment/ReplyTag'
import { TextArea } from '.././Comment/TextArea.style'
import ConfirmButton from '.././Buttons/ConfirmButton'

const MainInfoComment = ({ type, index, defaultTemplate }) => {
  const { comments, setComments } = useContext(CommentsContext)
  const { contentRef, isEdit, setTemplate, comment, setComment, setIsEdit } = useContext(CardContext)
  const [disabled, setDisabled] = useState(true)

  // update comments list when successfully update comment
  useEffect(() => {
    const newComments = [...comments]
    const parentCommentIndex = findParentIndexByReplyId(comments, comment.id)

    if (type == "reply") {
      newComments[parentCommentIndex].replies[index] = comment
    }
    else {
      newComments[index] = comment
    }
    setComments(newComments)
  }, [comment])

  // when click confirm button after changing
  const submit = () => {
    setIsEdit(false)
    setTemplate(defaultTemplate)
    // edit comment
    setComment({ ...comment, content: contentRef.current.value })
  }
  // check when user presses key onto Textarea
  const onInputText = () => {
    if (contentRef.current.value == contentRef.current.defaultValue) {
      setDisabled(true)
    }
    else {
      setDisabled(false)
    }
  }

  return (
    <>
      {!isEdit ? (
        <P gridArea="content" color={constStyle.COLORS.content}>
          {type == "reply" && <ReplyTag replyTo={comment.replyingTo} />}
          {comment.content}
        </P>
      ) : (
        <>
          <form action="" onSubmit={submit} id="form-card"></form>

          <TextArea ref={contentRef}
            gridArea="content"
            onChange={onInputText} defaultValue={comment.content} style={constStyle.TEXTAREA} />
          <ConfirmButton disabled={disabled} text="update" gridArea="btn" form="form-card" />
        </>
      )}
    </>
  )
}

export default MainInfoComment