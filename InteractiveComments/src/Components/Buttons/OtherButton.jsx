import React from 'react'

import { ReactComponent as EditIcon } from "../../assets/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg"
import { ReactComponent as ReplyIcon } from "../../assets/icon-reply.svg"

import { BOLD_FONT } from '../../Style/ConstantStyled'

import { H3 } from '../../Style/GeneralStyled'
import { TextIconButton } from './Buttons.style'
// import { getImgUrl } from '../../Style/ConstantStyled'

const OtherButton = ({type, gridArea, onClick, disabled=false}) => {
  return (
    <TextIconButton 
    color={type.colors}
    gap={type.gap}
    onClick={onClick} 
    width={type.size.width} 
    height={type.size.height}
    gridArea={gridArea}
    disabled={disabled}>
        {/* <img src={getImgUrl("icon", type.text)} alt={type.text} /> */}
        {type.text == "Edit" && <EditIcon />}
        {type.text == "Delete" && <DeleteIcon />}
        {type.text == "Reply" && <ReplyIcon />}
        <H3 weight={BOLD_FONT}>{type.text}</H3>
    </TextIconButton>
  )
}

export default OtherButton