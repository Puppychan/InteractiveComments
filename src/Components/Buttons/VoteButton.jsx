import React from 'react'
import { ImageButton } from './Buttons.style'
const VoteButton = ({colors, size, icon, onClick, isChosen, disabled=false}) => {
  return (
    <ImageButton 
    color={colors}
    onClick={onClick} 
    width={size} 
    height={size}
    isChosen={isChosen}
    disabled={disabled}>
        {icon}
    </ImageButton>
  )
}

export default VoteButton