import styled, {css} from "styled-components";
import * as constStyle from "./ConstantStyled"
export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexLeft = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const FlexCenterColumn = css`
    ${FlexCenter}
    flex-direction: column;
`


export const Font = css`
    font-weight: ${ ({weight}) => weight || constStyle.LIGHT_FONT};
    color: ${props => props.color};
    grid-area: ${props => props.gridArea};
`
export const H3 = styled.h3`
    ${Font}
`
export const H4 = styled.h4`
    ${Font}
`
export const H5 = styled.h5`
    ${Font}
`
export const P = styled.p`
    ${Font}
    line-height: 1.3;
`