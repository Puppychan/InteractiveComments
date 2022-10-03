import React from 'react'
import { ImageButton } from './Buttons.style'
const VoteButton = ({colors, size, icon, onClick, disabled=false}) => {
  return (
    <ImageButton 
    color={colors}
    onClick={onClick} 
    width={size} 
    height={size}
    disabled={disabled}>
        {icon}
    </ImageButton>
  )
}

export default VoteButton