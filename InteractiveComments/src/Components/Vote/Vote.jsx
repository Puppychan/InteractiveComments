import React from 'react'

import VoteContainer from '../Containers/VoteContainer.style'
import { ImageButton } from '../Buttons/Buttons.style'

import * as constStyle from "../../Style/ConstantStyled"

import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg"
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg"

const Vote = ({score}) => {
    const buttonSize = constStyle.SIZE.votingBtn
    const plusImg = constStyle.getImgUrl("icon", "plus")
    const minusImg = constStyle.getImgUrl("icon", "minus")

  return (
    <VoteContainer widthBtn={buttonSize} heightBtn={buttonSize}>

        <PlusIcon />
        <h3>{score}</h3>
        
    </VoteContainer>
  )
}

export default Vote