import styled from "styled-components";
import { FlexCenter } from "../../Style/GeneralStyled";

export const Button = styled.button`
    width: ${props => props.width ? props.width.desktop : "auto"};
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
    fill: ${({isChosen, color}) => isChosen ? color.btnChosen : color.btn};
    &:not([disabled]):hover {
      fill: ${props => props.color.btnHover};
    }
    
`
export const TextIconButton = styled(Button)`
    fill: ${props => props.color.btn};
    color: ${props => props.color.btn};

    ${FlexCenter}
    gap: ${props => props.gap};

    grid-area: ${props => props.gridArea};
    justify-content: flex-end;
    &:hover {
        fill: ${props => props.color.btnHover};
        color: ${props => props.color.btnHover};
    }
`
export const SubmitButton = styled(Button)`
    background-color: ${props => props.color.btn};
    color: ${props => props.color.text};
    font-weight: ${props => props.weight};
    border-radius: ${props => props.borderRadius};

    grid-area: ${props => props.gridArea};
    justify-self: flex-end;
    
    &:hover {
        opacity: 0.5;
    }
    
`