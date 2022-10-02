import styled from "styled-components";

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