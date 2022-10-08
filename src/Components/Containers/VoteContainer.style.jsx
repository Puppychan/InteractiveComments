import styled from "styled-components";

import { FlexCenterColumn, WidthCharacterSize } from "../../Style/GeneralStyled";
import { CORNER_RADIUS } from "../../Style/ConstantStyled";

const VoteContainer = styled.div`
  grid-area: ${props => props.gridArea};
  ${FlexCenterColumn}

  gap: ${props => props.gap};

  ${WidthCharacterSize}

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