import styled from "styled-components";

import { FlexCenterColumn, WidthCharacterSize } from "../../Style/GeneralStyled";
import { CORNER_RADIUS, getScreenPropsValue } from "../../Style/ConstantStyled";

const VoteContainer = styled.div`
  align-self: flex-start;
  grid-area: ${props => props.gridArea};
  ${FlexCenterColumn}

  gap: ${props => props.gap};

  // width here
  ${WidthCharacterSize}

  padding: ${props => props.padding.desktop};
  border-radius: ${CORNER_RADIUS};
  
  color: ${props => props.colorScore};
  background-color: ${props => props.bckColor};

  ${props => props.screensize == "mobile" && `
    flex-direction: row;
    width: 6em;
    height: 2.2em;
  `};

  svg {
    width: ${props => getScreenPropsValue(props.screensize, props.widthBtn)};
    height: ${props => getScreenPropsValue(props.screensize, props.heightBtn)};

  }
`

export default VoteContainer