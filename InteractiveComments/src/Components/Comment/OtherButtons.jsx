import React from 'react'
import OtherButton from '.././Buttons/OtherButton'
import {OtherButtonsContainer} from "../Containers/OtherButtonsContainer"
import * as constStyle from "../../Style/ConstantStyled"
const OtherButtons = ({ isUser, handleEvent, gridArea }) => {
    return (
        <>
            {!isUser ? (
                // reply
                <OtherButton type={constStyle.BUTTONS.reply}
                    gridArea={gridArea}
                    onClick={() => { console.log("hello") }} />
            ) : (
                <OtherButtonsContainer gridArea={gridArea}>
                    {/* edit */}
                    <OtherButton type={constStyle.BUTTONS.edit}
                        onClick={handleEvent.edit} />
                    {/* delete */}
                    <OtherButton type={constStyle.BUTTONS.delete}
                        onClick={handleEvent.clickOpenDeleteModal} />
                </OtherButtonsContainer>
            )}
        </>
    )
}

export default OtherButtons