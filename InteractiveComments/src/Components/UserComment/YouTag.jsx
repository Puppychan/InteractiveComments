import React from 'react'
import { H5 } from '../../Style/GeneralStyled'
import { YOU_TAG } from '../../Style/ConstantStyled'
const YouTag = ({gridArea}) => {
  return (
    <H5 
    color={YOU_TAG.colors.text}
    weight={YOU_TAG.weight}
    style={{
        gridArea: gridArea,
       backgroundColor: YOU_TAG.colors.bck,
       padding: YOU_TAG.padding.desktop
    }}>you</H5>
  )
}

export default YouTag