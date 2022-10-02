import React from 'react'
import { ImageButton } from './Buttons.style'
const VoteButton = ({colors, size, icon, onClick, disabled=false}) => {
  return (
    <ImageButton 
    colorBtn={colors.btn}
    colorBtnHover={colors.btnHover}
    onClick={onClick} 
    width={size} 
    height={size}
    disabled={disabled}>
        {icon}
    </ImageButton>
  )
}

export default VoteButton