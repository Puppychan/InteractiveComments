import React from 'react'

import * as constStyle from "../../Style/ConstantStyled"
import avatar from "../../assets/avatars/image-amyrobson.png"
import { AvatarStyle } from './Avatar.style'

const Avatar = ({username, gridArea}) => {
  return (
    <AvatarStyle 
      gridArea={gridArea}
      // src={constStyle.getImgUrl("avatar", username)} 
      src={avatar}
      alt={`${username}'s avatar`} 
    />
  )
}

export default Avatar