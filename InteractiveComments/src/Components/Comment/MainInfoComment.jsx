import React, { useContext, useState } from 'react'
import { CardContext, CommentsContext } from '../../Helpers/Contexts'
import { setNewCommentsChange, createReply } from '../../Controllers/CommentController'

import * as constStyle from "../../Style/ConstantStyled"

import { P } from '../../Style/GeneralStyled'
import ReplyTag from '.././Comment/ReplyTag'
import { TextArea } from '.././Comment/TextArea.style'
import ConfirmButton from '.././Buttons/ConfirmButton'

const MainInfoComment = ({ type, index, defaultTemplate, writeCommentType }) => {
  const { comments, setComments, setCurrentClickReplies } = useContext(CommentsContext)
  const { contentRef, isEdit, setTemplate, comment, setComment, setIsEdit } = useContext(CardContext)
  const [disabled, setDisabled] = useState(true)

  // when click confirm button after changing
  //..
  const submit = () => {
    if (writeCommentType == "") {
      setIsEdit(false)
      setTemplate(defaultTemplate)
      // edit comment
      setNewCommentsChange(type, "editComment", comments, setComments, comment, index, contentRef.current.value)
    }
    else if (writeCommentType == "writeReply") {
      if (type != "reply") {
        const newReply = createReply(contentRef.current.value, comment.user.username)
        const newComments = [...comments]
        newComments[index].replies.push(newReply)
        setCurrentClickReplies(prev => new Set([...prev].filter(x => x !== comment.id)))
        setComments(newComments)
        
      }
    }
    else {
      console.log("nooo");
    }

  }
  // check when user presses key onto Textarea
  const onInputText = () => {
  //   if (contentRef.current.value == contentRef.current.defaultValue) {
  //     setDisabled(true)
  //   }
  //   else {
  //     setDisabled(false)
  //   }
  }

  return (
    <>
      {!(isEdit || writeCommentType != "") ? (
        <P gridArea="content" color={constStyle.COLORS.content}>
          {type == "reply" && <ReplyTag replyTo={comment.replyingTo} />}
          {comment.content}
        </P>
      ) : (
        <>
          {/* <form action="" onSubmit={submit} id={`form-card${comment.id}`}></form> */}

          <TextArea ref={contentRef}
            gridArea="content"
            onChange={onInputText} defaultValue={writeCommentType != "" ? `@${comment.user.username} ` : comment.content} style={constStyle.TEXTAREA} />
          {/* <ConfirmButton text="update" gridArea="btn" form="form-card"  /> */}
          <ConfirmButton text="update" gridArea="btn" form="form-card" onClick={submit} />
        </>
      )}
    </>
  )
}

export default MainInfoComment