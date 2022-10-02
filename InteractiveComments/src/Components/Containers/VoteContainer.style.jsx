import styled from "styled-components";

import { FlexCenterColumn } from "../../Style/GeneralStyled";
import { CORNER_RADIUS } from "../../Style/ConstantStyled";

const VoteContainer = styled.div`
  ${FlexCenterColumn}
  gap: ${props => props.gap};
  
  width: ${props => props.width};
  min-width: ${props => props.minWidth.desktop};

  padding: ${props => props.padding.desktop};
  border-radius: ${CORNER_RADIUS};
  
  color: ${props => props.colorScore};
  background-color: ${props => props.bckColor};

  svg {
    width: ${props => props.widthBtn.desktop};
    height: ${props => props.heightBtn.desktop};

  }
`

export default VoteContainer