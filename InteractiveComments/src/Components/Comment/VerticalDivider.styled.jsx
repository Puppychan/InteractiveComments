import styled from "styled-components";
import { COLORS } from "../../Style/ConstantStyled"; 
export const VerticalDivider = styled.div`
    width: 0.2em;
    height: 100%;
    background-color: ${COLORS.divider};
    grid-area: ${props => props.gridArea};

    justify-self: center;
`