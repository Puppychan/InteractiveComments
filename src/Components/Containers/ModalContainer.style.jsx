import styled from "styled-components";
import { MODAL } from "../../Style/ConstantStyled";
export const ModalContainer = styled.div`
    display: grid;
    grid-template: 
    "header header" auto
    "content content" auto
    "secondBtn primaryBtn" auto /
    1fr 1fr;
    width: ${props => props.modal.size.width.desktop};
    height: max(${props => props.modal.size.height.desktop}, 30em);
    background-color: ${props => props.modal.colors.bck};
`