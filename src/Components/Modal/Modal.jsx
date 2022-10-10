import React from 'react'

import { H3, P } from '../../Style/GeneralStyled'
import { SubmitButton } from '../Buttons/Buttons.style'
import { ModalContainer } from '../Containers/ModalContainer.style'
import { ModalBackground } from './ModalBackground.style'
import { MODAL, REGULAR_FONT, BOLD_FONT } from '../../Style/ConstantStyled'
const Modal = ({ modal=MODAL, closeModalEvent, confirmEvent }) => {
    const primary = modal.btns.primary
    const secondary = modal.btns.secondary
    // if want to reuse later only need to change text to props
    return (
        <ModalBackground>
            <ModalContainer modal={modal}>
                <H3 weight={BOLD_FONT} gridArea="header">{modal.header}</H3>
                <P gridArea="content">{modal.content}</P>
                {secondary && (
                    <SubmitButton gridArea="secondBtn"
                    width={secondary.size.width} 
                    height={secondary.size.height}
                    color={secondary.colors}
                    weight={secondary.weight}
                    borderRadius={secondary.borderRadius}
                    onClick={closeModalEvent}>
                        {secondary.text.toLocaleUpperCase()}
                    </SubmitButton>
                )}
                <SubmitButton gridArea="primaryBtn"
                    width={primary.size.width} 
                    height={primary.size.height}
                    color={primary.colors}
                    weight={primary.weight}
                    borderRadius={primary.borderRadius}
                    onClick={confirmEvent}>
                        {primary.text.toLocaleUpperCase()}
                    </SubmitButton>
            </ModalContainer>
        </ModalBackground>
    )
}

export default Modal