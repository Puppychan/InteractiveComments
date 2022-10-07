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


export function setNewCommentsChange(type="general", action, comments, setComments, comment, index, additionalInfo=null) {
    if (type == "read") {
        const newComments = [...comments]
        switch (action) {
            case "decreaseVote":
            case "undoIncreaseVote":
                newComments[index].score = comment.score - 1
                break
            case "increaseVote":
            case "undoDecreaseVote":
                newComments[index].score = comment.score + 1
                break
            case "deleteComment":
                setComments(comments.filter(comment => comment !== comments[index]))
                break
            case "editComment":
                newComments[index].content = additionalInfo["content"]
                break
            case "createReply":
                const newReply = createReply(additionalInfo["content"], comment.user.username)
                newComments[index].replies.push(newReply)
                additionalInfo["setCurrentClickReplies"](prev => new Set([...prev].filter(x => x !== comment.id)))
                break
        }
        if (action != "deleteComment") {
            setComments(newComments)
        }
    }
    else if (type == "reply") {
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
            case "deleteComment":
                // remove reply item
                newComments[parentCommentIndex].replies.splice(index, 1)
                break
            case "editComment":
                newComments[parentCommentIndex].replies[index].content = updateValue
                break
            case "createReply":
                const newReply = createReply(additionalInfo["content"], comment.user.username)
                newComments[parentCommentIndex].replies.push(newReply)
                additionalInfo["setCurrentClickReplies"](prev => new Set([...prev].filter(x => x !== comment.id)))
                break
        }
        setComments(newComments)
    }
    else {
        const newComments = [...comments]
        switch (action) {

            case "createComment":
                const newComment = createComment(additionalInfo["content"])
                newComments.push(newComment)
                break
            default: 
                console.log("wrong action inside comment controller")
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
        "createdAt": moment().format(),
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
export function createComment(content) {
    return {
        "id": uuid(),
        "content": content,
        "createdAt": moment().format(),
        "score": 0,
        "user": {
          "image": {
            "png": "./images/avatars/image-juliusomo.png",
            "webp": "./images/avatars/image-juliusomo.webp"
          },
          "username": "juliusomo"
        },
        replies: []
    }

}
