import React, { useContext, useEffect, useState } from 'react'

import { CommentsContext } from "../../Helpers/Contexts"
import { setNewCommentsChange } from '../../Controllers/CommentController'

import VoteContainer from '../Containers/VoteContainer.style'
import VoteButton from '../Buttons/VoteButton'
import { H5 } from '../../Style/GeneralStyled'

import { VOTE } from '../../Style/ConstantStyled'

import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg"
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg"

const Vote = ({ comment, gridArea, index, type }) => {
  // context
  const { comments, setComments } = useContext(CommentsContext)
  const [isVote, setIsVote] = useState(!comment.hasVoted ? "none" : comment.hasVoted)

  // attribute styling
  const buttonSize = VOTE.sizes.votingBtn
  const colors = VOTE.colors
  
  // event clicks function
  const increase = () => {
    if (isVote == "decrease") {
      setNewCommentsChange(type, "undoDecreaseVote", comments, setComments, comment, index)
      setIsVote("none")
    }
    else if (isVote == "increase") {
      setNewCommentsChange(type, "undoIncreaseVote", comments, setComments, comment, index)
      setIsVote("none")
    }
    else if (isVote != "increase") {
      setNewCommentsChange(type, "increaseVote", comments, setComments, comment, index)
      setIsVote("increase")
    }
  }

  const decrease = () => {
    if (isVote == "increase") {
      setNewCommentsChange(type, "undoIncreaseVote", comments, setComments, comment, index)
      setIsVote("none")
    }
    else if (isVote == "decrease") {
      setNewCommentsChange(type, "undoDecreaseVote", comments, setComments, comment, index)
      setIsVote("none")
    }
    else if (isVote != "decrease" && comment.score != 0) {
      setNewCommentsChange(type, "decreaseVote", comments, setComments, comment, index)
      setIsVote("decrease")
    }
  }

  return (
    <VoteContainer
      gridArea={gridArea}
      widthBtn={buttonSize}
      heightBtn={buttonSize}
      // minWidth={vote.sizes.width}
      // width={`${String(comment.score).length * parseInt(fontSize.desktop)}em`}
      maxWidth={VOTE.sizes.width}
      fontSize={VOTE.sizes.font}
      text={comment.score}

      padding={VOTE.padding}
      gap={VOTE.gap}
      colorScore={colors.score}
      bckColor={colors.bck}>
      <VoteButton colors={colors} isChosen={isVote == "increase"} size={buttonSize} onClick={increase} icon={<PlusIcon />} />
      <H5>{comment.score}</H5>

      <VoteButton disabled={comment.score == 0} isChosen={isVote == "decrease"} colors={colors} size={buttonSize} onClick={decrease} icon={<MinusIcon />} />
    </VoteContainer>
  )
}

export default Vote