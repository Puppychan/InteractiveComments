import React from 'react'
import { H6 } from '../../Style/GeneralStyled'
import { YOU_TAG } from '../../Style/ConstantStyled'
const YouTag = ({gridArea}) => {
  return (
    <H6 
    color={YOU_TAG.colors.text}
    weight={YOU_TAG.weight}
    style={{
        gridArea: gridArea,
       backgroundColor: YOU_TAG.colors.bck,
       textAlign: "center",
       padding: YOU_TAG.padding.desktop
    }}>you</H6>
  )
}

export default YouTag