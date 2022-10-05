import React, { useContext, useMemo, useState, useRef, useEffect } from 'react'

import { CommentsContext, CardContext } from "../Helpers/Contexts"
import { findIndexById, findParentIndexByReplyId } from "../Controllers/CommentController"

import { CardContainer } from './Containers/CardContainer.style'
import SideInfoComment from './Comment/SideInfoComment'
import MainInfoComment from './Comment/MainInfoComment'
import Avatar from './Avatar/Avatar'
import Modal from './Modal/Modal'

const Card = ({ id, type, replies = [], isWriteComment = false }) => {
  // isUser for checking if this comment belongs to the user
  // context
  const { comments, setComments, currentUser, currentClickReplies, setCurrentClickReplies } = useContext(CommentsContext)
  const [isEdit, setIsEdit] = useState(false)

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const contentRef = useRef(null)
  // index of that comments
  const index = useMemo(() => findIndexById(type == "reply" ? replies : comments, id))

  const [comment, setComment] = useState(type == "reply" ? replies[index] : comments[index])

  const isUser = comment.user.username.localeCompare(currentUser.username) == 0
  const defaultTemplate = !isUser ? "peopleComment" : "userComment"
  const [template, setTemplate] = useState(defaultTemplate)

  // when click edit button
  const edit = () => {
    setIsEdit(true)
    setTemplate("updateComment")
  }


  //check if open modal
  const clickOpenDeleteModal = () => {
    setIsOpenDeleteModal(true)
  }
  // close modal
  const clickCloseDeleteModal = () => {
    setIsOpenDeleteModal(false)
  }
  // delete comment
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

  const clickReply = () => {
    if (currentClickReplies.has(id)) {
      
    }
    else {
      const newSet = currentClickReplies.add(id)
      setCurrentClickReplies(newSet)
      console.log("add successfully");
    }

  }

  const handleEvent = {
    edit: edit,
    clickOpenDeleteModal: clickOpenDeleteModal,
    clickReply: clickReply
  }

  return (
    <CardContext.Provider value={{ contentRef, isEdit, setTemplate, comment, setComment, setIsEdit }}>
      <CardContainer type={type} template={template}>
        <SideInfoComment
          isUser={isUser}
          handleEvent={handleEvent}/>
        <MainInfoComment
          type={type} index={index} defaultTemplate={defaultTemplate}
        />
        {isOpenDeleteModal && <Modal closeModalEvent={clickCloseDeleteModal} confirmEvent={deleteComment} />}

      </CardContainer>
    </CardContext.Provider>
  )
}

export default Card