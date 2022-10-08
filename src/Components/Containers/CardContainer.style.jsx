import styled from "styled-components";

import { CARD } from "../../Style/ConstantStyled";

export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${CARD.backgroundColor};
    border-radius: ${CARD.borderRadius};
    width: 100%;
    background-color: red;

    ${props => (props.type == "read") && `
        gap: ${CARD.main.sizes.gap};
        padding: ${CARD.main.sizes.padding.desktop};
        // remove later
        // width: ${CARD.main.sizes.width.desktop};
    `}
    ${props => props.type == "reply" && `
        gap: ${CARD.reply.sizes.gap};
        padding: ${CARD.reply.sizes.padding.desktop};
        // remove later
        // width: ${CARD.reply.sizes.width.desktop};
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
    ${props => (props.template == "writeReply" || props.template == "writeComment") && `
        align-items: flex-start;
        grid-template: ${CARD.writeReply.gridTemplate.desktop}; 
    `}
    
`