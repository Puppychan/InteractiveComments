import styled from "styled-components";
import { FlexCenter } from "../../Style/GeneralStyled";

export const Button = styled.button`
    width: ${props => props.width.desktop};
    height: ${props => props.height.desktop};
    
    border: none;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &:not([disabled]):hover {
        cursor: pointer;
    }
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`
export const ImageButton = styled(Button)`
    fill: ${props => props.colorBtn};
    &:not([disabled]):hover {
      fill: ${props => props.colorBtnHover};
    }
`
export const TextIconButton = styled(Button)`
    fill: ${props => props.color.btn};
    color: ${props => props.color.btn};

    ${FlexCenter}
    gap: ${props => props.gap};

    grid-area: ${props => props.gridArea};
    &:hover {
        fill: ${props => props.color.btnHover};
        color: ${props => props.color.btnHover};
    }
`