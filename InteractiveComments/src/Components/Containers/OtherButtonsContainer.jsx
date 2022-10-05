import styled from "styled-components";

import { FlexBtw } from "../../Style/GeneralStyled";

export const OtherButtonsContainer = styled.div`
    ${FlexBtw}
    grid-area: ${props => props.gridArea};
`