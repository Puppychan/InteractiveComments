
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

export function createComment() {
    
};
