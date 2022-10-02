import styled from "styled-components";

export const ImageButton = styled.button`
    width: ${props => props.width.desktop};
    height: ${props => props.height.desktop};
    
    border: none;
    background-color: transparent;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`