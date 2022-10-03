import styled from "styled-components";

import { CARD } from "../../Style/ConstantStyled";

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${CARD.backgroundColor};
    border-radius: ${CARD.borderRadius};
    padding: ${CARD.padding.desktop};
    

    ${props => (props.type == "read" || props.typed == 'reply') && `
        grid-template: ${CARD.read.gridTemplate.desktop};
        gap: ${CARD.read.sizes.gap};
        width: ${CARD.read.sizes.width.desktop};
    `}
    ${props => props.type == "reply" && `
        width: ${CARD.reply.sizes.width.desktop};
    `}
`