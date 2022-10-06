//https://stackoverflow.com/questions/58806883/how-to-use-set-with-reacts-usestate
import React, { useContext, useMemo, useState, useRef, useEffect } from 'react'

import { CommentsContext, CardContext } from "../Helpers/Contexts"
import { findIndexById, setNewCommentsChange } from "../Controllers/CommentController"

import { CardContainer } from './Containers/CardContainer.style'
import SideInfoComment from './Comment/SideInfoComment'
import MainInfoComment from './Comment/MainInfoComment'
import Avatar from './Avatar/Avatar'
import Modal from './Modal/Modal'

const Card = ({ id, type, replies = [], writeCommentType = "" }) => {
  // isUser for checking if this comment belongs to the user
  // context
  const { comments, setComments, currentUser, currentClickReplies, setCurrentClickReplies } = useContext(CommentsContext)
  const [isEdit, setIsEdit] = useState(false)

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const contentRef = useRef(null)
  // index of that comments
  //...
  const index = useMemo(() => findIndexById(type == "reply" ? replies : comments, id))

  // ...
  const [comment, setComment] = useState(type == "reply" ? replies[index] : comments[index])
  const isUser = comment.user.username.localeCompare(currentUser.username) == 0

  //,
  const findDefaultTemplate = () => {
    if (writeCommentType != "") {
      return "writeReply"
    }
    else {
      return !isUser ? "peopleComment" : "userComment"
    }
  }
  const defaultTemplate = findDefaultTemplate()
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
    setNewCommentsChange(type, "deleteComment", comments, setComments, comment, index)
  }

  const clickReply = () => {
    if (currentClickReplies.has(id)) {
      setCurrentClickReplies(prev => new Set([...prev].filter(x => x !== id)))
    }
    else {
      setCurrentClickReplies(prev => new Set(prev.add(id)))
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
          handleEvent={handleEvent} type={type} index={index} writeCommentType={writeCommentType}/>
        <MainInfoComment
          type={type} index={index} defaultTemplate={defaultTemplate} writeCommentType={writeCommentType}
        />
        {isOpenDeleteModal && <Modal closeModalEvent={clickCloseDeleteModal} confirmEvent={deleteComment} />}

      </CardContainer>
    </CardContext.Provider>
  )
}

export default Card