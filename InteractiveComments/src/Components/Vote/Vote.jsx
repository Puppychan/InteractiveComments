import React, { useContext, useMemo, useState } from 'react'

import { CommentsContext } from "../../Helpers/Contexts"
import { setNewCommentsChange } from '../../Controllers/CommentController'

import VoteContainer from '../Containers/VoteContainer.style'
import VoteButton from '../Buttons/VoteButton'
import { H4 } from '../../Style/GeneralStyled'

import * as constStyle from "../../Style/ConstantStyled"

import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg"
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg"

const Vote = ({ comment, gridArea, index, type }) => {
  // context
  const { comments, setComments } = useContext(CommentsContext)

  // attribute styling
  const vote = constStyle.VOTE
  const buttonSize = vote.sizes.votingBtn
  const fontSize = vote.sizes.font
  const colors = vote.colors

  // event clicks function
  const increase = () => {
    setNewCommentsChange(type, "increaseVote", comments, setComments, comment, index)
  }

  const decrease = () => {
    if (comment.score != 0) {
      setNewCommentsChange(type, "decreaseVote", comments, setComments, comment, index)
    }
  }

  return (
    <VoteContainer
      gridArea={gridArea}
      widthBtn={buttonSize}
      heightBtn={buttonSize}
      minWidth={vote.sizes.width}
      width={`${String(comment.score).length * parseInt(fontSize.desktop)}em`}
      padding={vote.padding}
      gap={vote.gap}
      colorScore={colors.score}
      bckColor={colors.bck}>
      <VoteButton colors={colors} size={buttonSize} onClick={increase} icon={<PlusIcon />} />
      <H4>{comment.score}</H4>
      <VoteButton disabled={comment.score == 0} colors={colors} size={buttonSize} onClick={decrease} icon={<MinusIcon />} />
    </VoteContainer>
  )
}

export default Vote