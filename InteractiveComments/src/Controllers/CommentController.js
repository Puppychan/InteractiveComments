// https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13
import moment from "moment"
import uuid from 'react-uuid';

export function checkRepliesNotEmpty(comment) {
    return comment.replies && comment.replies.length > 0;
}
export function findIndexById(arr, id) {

    return arr.findIndex((element) => element.id == id)
}
export function findParentIndexByReplyId(comments, id) {
    return comments.findIndex((element) => {
        if (checkRepliesNotEmpty(element)) {
            return findIndexById(element.replies, id) != -1
        }

    })
}
export function setNewCommentsChange(type, action, comments, setComments, comment, index, updateValue=null) {
    if (type != "reply") {
        const newComments = [...comments]
        switch (action) {
            case "decreaseVote":
                newComments[index].score = comment.score - 1
                break
            case "increaseVote":
                newComments[index].score = comment.score + 1
                break
            case "removeComment":
                setComments(comments.filter(comment => comment !== comments[index]))
                break
            case "editComment":
                newComments[index].content = updateValue
                break


        }
        setComments(newComments)
    }
    else {
        const newComments = [...comments]
        // that's why declare comment
        const parentCommentIndex = findParentIndexByReplyId(comments, comment.id)
        switch (action) {
            case "decreaseVote":
                newComments[parentCommentIndex].replies[index].score = comment.score - 1
                break
            case "increaseVote":
                newComments[parentCommentIndex].replies[index].score = comment.score + 1
                break
            case "removeComment":
                // remove reply item
                newComments[parentCommentIndex].replies.splice(index, 1)
                break
            case "editComment":
                newComments[parentCommentIndex].replies[index].content = updateValue
                break


        }
        setComments(newComments)
    }
}
export function createReply(content, replyingTo) {
    if (content.trim().indexOf("@") == 0) {
        const trimContent = content.trim()
        content = trimContent.slice(trimContent.indexOf(replyingTo) + replyingTo.length, trimContent.length).trim()
    }
    return {
        "id": uuid(),
        "content": content,
        "createdAt": moment().startOf('second').fromNow(),
        "score": 0,
        "replyingTo": replyingTo,
        "user": {
          "image": {
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        }
    }

}
