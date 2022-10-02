import { useState } from 'react'
import GlobalStyled from './Style/GlobalStyled'

import JsonData from "./Resources/data.json"
import Vote from './Components/Vote/Vote'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <GlobalStyled />
      <Vote score={JsonData.comments[0].score}></Vote>
    </div>
  )
}

export default App
