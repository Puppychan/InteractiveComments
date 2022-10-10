// https://stackoverflow.com/questions/63409339/dont-write-a-character-in-a-textarea-after-a-onkeypress-check
import React, { useContext, useState, useEffect } from 'react'
import { CardContext, CommentsContext } from '../../Helpers/Contexts'
import { setNewCommentsChange } from '../../Controllers/CommentController'

import * as constStyle from "../../Style/ConstantStyled"

import { P } from '../../Style/GeneralStyled'
import ReplyTag from '.././Comment/ReplyTag'
import { TextArea } from '.././Comment/TextArea.style'
import ConfirmButton from '.././Buttons/ConfirmButton'

const MainInfoComment = ({ type, index, defaultTemplate, writeCommentType }) => {
  const { comments, setComments, setCurrentClickReplies } = useContext(CommentsContext)
  const { contentRef, isEdit, setTemplate, comment, setIsEdit } = useContext(CardContext)
  const [disabled, setDisabled] = useState(true)

  const findText = (textareaType) => {
    switch (writeCommentType) {
      case "writeComment" :
        return textareaType == "defaultValue" ?  "" : "Write Comment..."
      case "writeReply":
        return textareaType == "defaultValue" ? `@${comment.user.username} ` : "Write Reply..."
      default:
        if (type == "read") {
          return textareaType == "defaultValue" ? comment.content : "Edit Comment..."
        } else {
          const content = `${!comment.content.startsWith(`@${comment["replyingTo"]} `) ? `@${comment["replyingTo"]} ` : ""}${comment.content}`
          return textareaType == "defaultValue" ? content : "Edit Comment..."
        }

    }
  }

  useEffect(() => {
    if (isEdit) setDisabled(false)
  }, [isEdit])

  // when click confirm button after changing
  //..
  const submit = () => {
    if (writeCommentType == "") {
      setIsEdit(false)
      setTemplate(defaultTemplate)
      // edit comment
      setNewCommentsChange(type, "editComment", comments, setComments, comment, index, 
        {"content": contentRef.current.value})
    }
    else if (writeCommentType == "writeReply") {
      setNewCommentsChange(type, "createReply", comments, setComments, comment, index, 
        {"setCurrentClickReplies": setCurrentClickReplies, "content": contentRef.current.value})
    }
    else if (writeCommentType == "writeComment") {
      setNewCommentsChange("general", "createComment", comments, setComments, comment, index, 
        {"content": contentRef.current.value})
        // reset
        contentRef.current.value = ""
        setDisabled(true)
    }

  }
  // check when user presses key onto Textarea
  const onInputText = (event) => {
      // enter -> submit
      if (event.key == 'Enter' && !event.shiftKey) {
        // stop input "\n" character when enter for submitting input
        event.preventDefault()
        submit()
      }

      if (contentRef.current.value.trim() == "") {
        setDisabled(true)
      }
      else {
        setDisabled(false)
      }
  }

  return (
    <>
      {!(isEdit || writeCommentType != "") ? (
        <P gridArea="content" color={constStyle.COLORS.content} style={{alignSelf: "flex-start"}}>
          {type == "reply" && <ReplyTag replyTo={comment.replyingTo} />}
          {comment.content}
        </P>
      ) : (
        <>
          {/* <form action="" onSubmit={submit} id={`form-card${comment.id}`}></form> */}

          <TextArea ref={contentRef}
            gridArea="content"
            onKeyDown={onInputText} 
            defaultValue={findText("defaultValue")} placeholder={findText("placeholder")} 
            style={constStyle.TEXTAREA} />
          {/* <ConfirmButton text="update" gridArea="btn" form="form-card"  /> */}
          <ConfirmButton 
            disabled={disabled} 
            text="update" gridArea="btn" form="form-card" 
            onClick={submit}/>
        </>
      )}
    </>
  )
}

export default MainInfoComment