import styled from "styled-components";

import { FlexCenterColumn } from "../../Style/GeneralStyled";
import { MAIN_PAGE } from "../../Style/ConstantStyled";

export const CommentContainer = styled.div`
    ${FlexCenterColumn}
    gap: ${MAIN_PAGE.gap};
    align-items: ${props => props.type == "reply" && "flex-end"};
    grid-area: ${props => props.gridArea};
    width: ${props => props.width};
    display: grid;
    
    @media not all and (min-resolution:.001dpcm) {
        /* Safari only override */
        gap: ${props => props.screensize == "desktop" ? "5em" : "3em"};
        
    }
`