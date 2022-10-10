import styled from "styled-components";

import { CARD, getScreenPropsValue } from "../../Style/ConstantStyled";


const getResponsive = (props, typeValue) => {
    switch (typeValue) {
        case "template":
            return getScreenPropsValue(props.screensize, CARD[props.template].gridTemplate)
        case "padding":
            return getScreenPropsValue(props.screensize, CARD[props.type].sizes.padding)
    }
}
export const CardContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-color: ${CARD.backgroundColor};
    border-radius: ${CARD.borderRadius};
    width: ${props => props.width || CARD.width};
    
    
    gap: ${props => CARD[props.type].sizes.gap};
    
    padding: ${props => getResponsive(props, "padding")};
    grid-template: ${props => getResponsive(props, "template")};
    ${props => (props.template == "writeReply" || props.template == "writeComment") && `
        align-items: flex-start;
    `}

    min-height: ${props => props.screensize == "desktop" ? "0" : "12em"}
    
`