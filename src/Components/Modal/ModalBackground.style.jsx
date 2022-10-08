import styled from "styled-components";
import { FlexCenter } from "../../Style/GeneralStyled";
export const ModalBackground = styled.div`
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: auto; /* Enable scroll if needed */
    background-color: rgba(0,0,0,0.7);

    ${FlexCenter}
`