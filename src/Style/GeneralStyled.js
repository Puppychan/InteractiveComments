import styled, { css } from "styled-components";
import * as constStyle from "./ConstantStyled"
export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexBtw = css`
    display: flex;
    justify-content: space-between;
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
export const WidthCharacterSize = css`
    width: max(${({ text, fontSize }) => (String(text).length * parseInt(fontSize.desktop))}em, ${props => props.maxWidth.desktop});
`

// Font
export const Font = css`
    font-weight: ${({ weight }) => weight || constStyle.LIGHT_FONT};
    color: ${props => props.color};
    grid-area: ${props => props.gridArea};
`
export const H3 = styled.h3`
    ${Font}
    font-size: 1rem;
    font-size: clamp(1.44rem, calc(1.34rem + 0.51vw), 1.95rem);
`
export const H4 = styled.h4`
    ${Font}
    font-size: clamp(1.20rem, calc(1.13rem + 0.36vw), 1.56rem);
`
export const H5 = styled.h5`
    ${Font}
    font-size: 1rem;
    font-size: ${constStyle.H5_FONT};
`
export const P = styled.p`
        /* font-size: clamp(0.69rem, calc(0.67rem + 0.11vw), 0.80rem); */
        font-size: clamp(0.83rem, calc(0.80rem + 0.17vw), 1.00rem);
        ${Font}
        line-height: 1.3;
`
export const H6 = styled.h6`
        font-size: clamp(0.69rem, calc(0.67rem + 0.11vw), 0.80rem);
        ${Font}
        line-height: 1.3;
`