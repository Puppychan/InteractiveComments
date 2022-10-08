import styled from "styled-components";

import { FlexBtw } from "../../Style/GeneralStyled";

export const OtherButtonsContainer = styled.div`
    ${FlexBtw}
    justify-content: flex-end;
    grid-area: ${props => props.gridArea};
    gap: 1em;
`