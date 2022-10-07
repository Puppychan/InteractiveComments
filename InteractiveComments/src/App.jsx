//https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
import { useState, useEffect } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"

import Comments from "./Components/Comments"

function App() {

  const [comments, setComments] = useState([])
  const [currentClickReplies, setCurrentClickReplies] = useState(new Set())
  const currentUser = JsonData.currentUser

  useEffect(() => {
    const localStoreItems = localStorage.getItem('comments')
    if (localStoreItems.length != 2) {
      const items = JSON.parse(localStoreItems)
      console.log("not undefine-", items);
      setComments(items)
    }
    else {
      console.log('undefine', localStoreItems);
      localStorage.setItem('comments', JSON.stringify(JsonData.comments))
      setComments(JsonData.comments)
    }
    
  }, [])

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments))
  }, [comments])

  return (
    <CommentsContext.Provider value={{comments, setComments, currentUser, currentClickReplies, setCurrentClickReplies}}>
      <GlobalStyled />
      <Comments />
    </CommentsContext.Provider>
  )
}

export default App
