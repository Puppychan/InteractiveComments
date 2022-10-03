
export function findIndexById(arr, id) {
    
    return arr.findIndex((element) => element.id == id)
}
export function findParentIndexByReplyId(comments, id) {
    return comments.findIndex((element) => {
        if (element.replies && element.replies.length > 0) {
            return findIndexById(element.replies, id) != -1
        }
        
    })
}