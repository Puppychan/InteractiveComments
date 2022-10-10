import styled from "styled-components";
import { MODAL, CORNER_RADIUS } from "../../Style/ConstantStyled";
export const ModalContainer = styled.div`
    display: grid;
    grid-template: 
    "header header" auto
    "content content" auto
    "secondBtn primaryBtn" auto /
    1fr 1fr;

    border-radius: ${CORNER_RADIUS};
    padding: ${props => props.modal.size.padding};
    width: ${props => props.modal.size.width.desktop};
    height: max(${props => props.modal.size.height.desktop}, 30em);
    background-color: ${props => props.modal.colors.bck};
`