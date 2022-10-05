import React, { useContext, useMemo, useState, useRef, useEffect } from 'react'

import { CommentsContext, CardContext } from "../Helpers/Contexts"
import { findIndexById, findParentIndexByReplyId } from "../Controllers/CommentController"

import { CardContainer } from './Containers/CardContainer.style'
import SideInfoComment from './Comment/SideInfoComment'
import MainInfoComment from './Comment/MainInfoComment'

import Modal from './Modal/Modal'

const Card = ({ id, type, replies = [], isWriteComment = false }) => {
  // isUser for checking if this comment belongs to the user
  // context
  const { comments, setComments, currentUser } = useContext(CommentsContext)
  const [isEdit, setIsEdit] = useState(false)
  const [disabled, setDisabled] = useState(true)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const contentRef = useRef(null)
  // index of that comments
  const index = useMemo(() => findIndexById(type == "reply" ? replies : comments, id))
  const [comment, setComment] = useState(type == "reply" ? replies[index] : comments[index])

  const isUser = comment.user.username.localeCompare(currentUser.username) == 0
  const defaultTemplate = !isUser ? "peopleComment" : "userComment"
  const [template, setTemplate] = useState(defaultTemplate)

  // update comments list when successfully update comment
  useEffect(() => {
    const newComments = [...comments]
    const parentCommentIndex = findParentIndexByReplyId(comments, id)
    if (type == "reply") {
      newComments[parentCommentIndex].replies[index] = comment
    }
    else {
      newComments[index] = comment
    }
    setComments(newComments)
  }, [comment])

  // when click edit button
  const edit = () => {
    setIsEdit(true)
    setTemplate("updateComment")
  }

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

  //check if open modal
  const clickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true)
  }
  const clickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false)
  }
  const deleteComment = () => {
    if (type != "reply") {
      setComments(comments.filter(comment => comment !== comments[index]))
    }
    else {
      const newComments = [...comments]
      const parentCommentIndex = findParentIndexByReplyId(comments, id)
      // remove reply item
      newComments[parentCommentIndex].replies.splice(index, 1)
      setComments(newComments)
    }
  }
  const handleEvent = {
    edit: edit,
    submit: submit,
    onInputText: onInputText,
    clickOpenDeleteModal: clickOpenDeleteModal
  }

  return (
    <CardContext.Provider value={{ contentRef, disabled, isEdit }}>
      <CardContainer type={type} template={template}>
        <SideInfoComment
          comment={comment}
          isUser={isUser}
          handleEvent={handleEvent}
          isEdit={isEdit} />
        <MainInfoComment
          type={type} comment={comment} handleEvent={handleEvent}
        />
        {isOpenDeleteModal && <Modal closeModalEvent={clickCloseDeleteModal} confirmEvent={deleteComment} />}

      </CardContainer>
    </CardContext.Provider>
  )
}

export default Card