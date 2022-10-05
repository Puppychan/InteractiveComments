import styled from "styled-components";
import { COLORS } from "../../Style/ConstantStyled"; 
import { FlexCenter } from "../../Style/GeneralStyled";
export const VerticalDivider = styled.div`
    position: absolute;
    width: 0.2em;
    height: 100%;
    background-color: ${COLORS.divider};
    grid-area: ${props => props.gridArea};

`
export const VerticalDividerContainer = styled.div`
    ${FlexCenter}
    /* position: absolute; */
    width: ${props => props.width};
    
`