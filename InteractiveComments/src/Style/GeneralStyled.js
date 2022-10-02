import styled, {css} from "styled-components";

export const FlexCenter = css`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const FlexCenterColumn = css`
    ${FlexCenter}
    flex-direction: column;
`