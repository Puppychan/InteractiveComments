import styled, {css} from "styled-components";
import * as constStyle from "./ConstantStyled"
export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexCenterColumn = css`
    ${FlexCenter}
    flex-direction: column;
`

export const H3 = styled.h3`
    font-weight: ${ ({weight}) => weight || constStyle.LIGHT_FONT};
    color: ${props => props.color};
`