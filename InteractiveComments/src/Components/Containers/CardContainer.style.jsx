import styled from "styled-components";

import { CARD } from "../../Style/ConstantStyled";

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${CARD.backgroundColor};
    border-radius: ${CARD.borderRadius};
    padding: ${CARD.padding.desktop};
    

    ${props => (props.type == "read") && `
        gap: ${CARD.main.sizes.gap};
        width: ${CARD.main.sizes.width.desktop};
    `}
    ${props => props.type == "reply" && `
        gap: ${CARD.reply.sizes.gap};
        width: ${CARD.reply.sizes.width.desktop};
    `}

    ${props => props.template == "peopleComment" && `
        grid-template: ${CARD.peopleComment.gridTemplate.desktop}; 
    `}
    ${props => props.template == "userComment" && `
        grid-template: ${CARD.userComment.gridTemplate.desktop}; 
    `}
    ${props => props.template == "updateComment" && `
        grid-template: ${CARD.updateComment.gridTemplate.desktop}; 
    `}
    
`