import React, { useContext } from 'react'
import { CardContext } from '../../Helpers/Contexts'

import * as constStyle from "../../Style/ConstantStyled"

import { P } from '../../Style/GeneralStyled'
import ReplyTag from '.././Comment/ReplyTag'
import { TextArea } from '.././Comment/TextArea.style'
import ConfirmButton from '.././Buttons/ConfirmButton'

const MainInfoComment = ({ type, comment, handleEvent,  }) => {
    const { contentRef, disabled, isEdit } = useContext(CardContext)
    return (
        <>
            {!isEdit ? (
                <P gridArea="content" color={constStyle.COLORS.content}>
                    {type == "reply" && <ReplyTag replyTo={comment.replyingTo} />}
                    {comment.content}
                </P>
            ) : (
                <>
                    <form action="" onSubmit={handleEvent.submit} id="form-card"></form>

                    <TextArea ref={contentRef}
                        gridArea="content"
                        onChange={handleEvent.onInputText} defaultValue={comment.content} style={constStyle.TEXTAREA} />
                    <ConfirmButton disabled={disabled} text="update" gridArea="btn" form="form-card" />
                </>
            )}
        </>
    )
}

export default MainInfoComment