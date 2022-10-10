import styled from "styled-components";
import { getScreenPropsValue, CORNER_RADIUS } from "../../Style/ConstantStyled";
export const ModalContainer = styled.div`
    display: grid;
    grid-template: 
    "header header" auto
    "content content" auto
    "secondBtn primaryBtn" auto /
    1fr 1fr;
    align-items: center;
    gap: ${props => getScreenPropsValue(props.screensize, props.modal.size.gap)};

    border-radius: ${CORNER_RADIUS};
    padding: ${props => getScreenPropsValue(props.screensize, props.modal.size.padding)};
    width: ${props => getScreenPropsValue(props.screensize, props.modal.size.width)};
    background-color: ${props => props.modal.colors.bck};
`