import React, { useContext, useMemo, useState } from 'react'

import { CommentsContext } from "../../Helpers/Contexts"
import { findIndexById } from "../../Controllers/CommentController"

import VoteContainer from '../Containers/VoteContainer.style'
import VoteButton from '../Buttons/VoteButton'
import { H4 } from '../../Style/GeneralStyled'

import * as constStyle from "../../Style/ConstantStyled"

import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg"
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg"

const Vote = ({ index }) => {
  // context
  const { comments, setComments } = useContext(CommentsContext)
  const [score, setScore] = useState(comments[index].score)

  // attribute styling
  const vote = constStyle.VOTE
  const buttonSize = vote.sizes.votingBtn
  const fontSize = vote.sizes.font
  const colors = vote.colors

  // event clicks function
  const increase = () => {
    const updatedComments = [...comments]
    updatedComments[index].score = score + 1
    setComments(updatedComments)
    setScore(score + 1)
  }

  const decrease = () => {
    if (score != 0) {
      const updatedComments = [...comments]
      updatedComments[index].score = score - 1
      setComments(updatedComments)
      setScore(score - 1)
    }
  }

  return (
    <VoteContainer
      widthBtn={buttonSize}
      heightBtn={buttonSize}
      minWidth={vote.sizes.width}
      width={`${String(score).length * parseInt(fontSize.desktop)}em`}
      padding={vote.padding}
      gap={vote.gap}
      colorScore={colors.score}
      bckColor={colors.bck}>
      <VoteButton colors={colors} size={buttonSize} onClick={increase} icon={<PlusIcon />} />
      <H4>{score}</H4>
      <VoteButton disabled={score == 0} colors={colors} size={buttonSize} onClick={decrease} icon={<MinusIcon />} />
    </VoteContainer>
  )
}

export default Vote