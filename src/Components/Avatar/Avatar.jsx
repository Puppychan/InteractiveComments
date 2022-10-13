import React from 'react'

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