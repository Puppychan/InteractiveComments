import React from 'react'

import * as constStyle from "../../Style/ConstantStyled"
import { AvatarStyle } from './Avatar.style'

const Avatar = ({username}) => {
  return (
    <AvatarStyle 
      src={constStyle.getImgUrl("avatar", username)} 
      alt={`${username}'s avatar`} 
    />
  )
}

export default Avatar