//https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
// https://stackoverflow.com/questions/11448340/how-to-get-duration-in-weeks-with-moment-js
import { useState, useEffect } from 'react'
import GlobalStyled from './Style/GlobalStyled'
import {CommentsContext} from "./Helpers/Contexts"
import JsonData from "./Resources/data.json"
import moment from "moment"
import Comments from "./Components/Comments"

function App() {

  const [comments, setComments] = useState([])
  const [currentClickReplies, setCurrentClickReplies] = useState(new Set())
  const currentUser = JsonData.currentUser

  useEffect(() => {
    // first load when run

    // load from local storage
    const localStoreItems = localStorage.getItem('comments')
    // if already exist
    if (localStoreItems.length != 2) {
      const items = JSON.parse(localStoreItems)
      setComments(items)
      // setComments(JsonData.comments)
    }
    // if not exist in storage
    else {
      localStorage.setItem('comments', JSON.stringify(JsonData.comments))
      setComments(JsonData.comments)
    }

    // add format weeks to display published date
    moment.updateLocale('en', {

      relativeTime : {
        dd: function(number) {
              if (number < 7) {
                return number + ' days'; // Moment uses "d" when it's just 1 day.
              }
              else {
                var weeks = Math.round(number / 7);
                return weeks + ' ' + (weeks > 1 ? 'weeks' : 'week');
              }
            }
      }
    
    });
    
  }, [])

  useEffect(() => {
    console.log(comments);
    // update storage when update comments
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
