import styled from "styled-components";
import { COLORS } from "../../Style/ConstantStyled"; 
import { FlexCenter, FlexLeft, WidthCharacterSize } from "../../Style/GeneralStyled";
export const VerticalDivider = styled.div`
    position: absolute;
    width: 0.2em;
    height: 100%;
    background-color: ${COLORS.divider};
    grid-area: ${props => props.gridArea};
    

`
export const VerticalDividerContainer = styled.div`
    ${FlexCenter}
    ${props => props.screensize == "desktop" && WidthCharacterSize}
    ${props => props.screensize == "mobile" && `
        width: 5%;
    `}
    
`