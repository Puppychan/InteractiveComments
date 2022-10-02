import styled from "styled-components";

import { FlexCenterColumn } from "../../Style/GeneralStyled";

const VoteContainer = styled.div`
  ${FlexCenterColumn}
  svg {
    width: ${props => props.widthBtn.desktop};
    height: ${props => props.heightBtn.desktop};
    fill: blue;
    & path {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
`

export default VoteContainer