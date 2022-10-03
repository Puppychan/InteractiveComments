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
        gap: ${CARD.main.sizes.gap};

        width: ${CARD.main.sizes.width.desktop};
    `}
    ${props => props.type == "reply" && `
        width: ${CARD.reply.sizes.width.desktop};
    `}

    ${props => !props.isUser ? `
        grid-template: ${CARD.peopleComment.gridTemplate.desktop}; 
    ` : `
        grid-template: ${CARD.userComment.gridTemplate.desktop}; 
    `}
`