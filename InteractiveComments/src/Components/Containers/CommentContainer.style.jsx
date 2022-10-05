import styled from "styled-components";

import { FlexCenterColumn } from "../../Style/GeneralStyled";
import { MAIN_PAGE } from "../../Style/ConstantStyled";

export const CommentContainer = styled.div`
    ${FlexCenterColumn}
    gap: ${MAIN_PAGE.gap};
    align-items: ${props => props.type == "reply" && "flex-end"};
    grid-area: ${props => props.gridArea};


`