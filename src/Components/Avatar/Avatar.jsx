import React from 'react'

import {AVATAR_URL} from "../../Style/ConstantStyled"
// import avatar from "../../assets/avatars/image-juliusomo.png"
import { AvatarStyle } from './Avatar.style'

const Avatar = ({username, gridArea}) => {
  return (
    <AvatarStyle 
      gridArea={gridArea}
      // src={constStyle.getImgUrl("avatar", username)} 
      // src={avatar}
      src={`${"/avatars/image-" + username}.png`}
      alt={`${username}'s avatar`} 
    />
  )
}

export default Avatar