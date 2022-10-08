import React from 'react'

import { ReactComponent as EditIcon } from "../../assets/icon-edit.svg"
import { ReactComponent as DeleteIcon } from "../../assets/icon-delete.svg"
import { ReactComponent as ReplyIcon } from "../../assets/icon-reply.svg"

import { BOLD_FONT } from '../../Style/ConstantStyled'

import { P } from '../../Style/GeneralStyled'
import { TextIconButton } from './Buttons.style'
// import { getImgUrl } from '../../Style/ConstantStyled'

const OtherButton = ({type, gridArea, onClick, disabled=false}) => {
  return (
    <TextIconButton 
    color={type.colors}
    gap={type.gap}
    onClick={onClick} 
    height={type.size.height}
    gridArea={gridArea}
    disabled={disabled}>
        {/* <img src={getImgUrl("icon", type.text)} alt={type.text} /> */}
        {type.text == "Edit" && <EditIcon />}
        {type.text == "Delete" && <DeleteIcon />}
        {type.text == "Reply" && <ReplyIcon />}
        <P weight={BOLD_FONT}>{type.text}</P>
    </TextIconButton>
  )
}

export default OtherButton