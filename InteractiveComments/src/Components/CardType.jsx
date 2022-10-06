import React from 'react'
import Card from './Card'


export const ReadCommentCard = ({comment}) => {
  return (
    <Card id={comment.id} type="read"/>
  )
}
export const ReplyCommentCard = ({comment, reply}) => {
  return (
    <Card id={reply.id} replies={comment.replies} type="reply" />
  )
}
export const WriteReplyCommentCard = ({comment}) => {
    return (
        <Card id={comment.id} type="read" writeCommentType="writeReply"/>
    )
}
export const WriteReplyCard = ({comment, reply}) => {
    return (
        <Card id={reply.id} replies={comment.replies} type="reply" writeCommentType="writeReply"/>
    )
}