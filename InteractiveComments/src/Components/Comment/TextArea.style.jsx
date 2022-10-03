import styled from "styled-components";

export const TextArea = styled.textarea`
    grid-area: ${props => props.gridArea};
    resize: none;

    width: ${props => props.style.sizes.width};
    height: ${props => props.style.sizes.height.desktop};
    border-radius: ${props => props.style.borderRadius};
    padding: ${props => props.style.sizes.padding.desktop};
    
    border: 1px solid ${props => props.style.colors.border};
    color: ${props => props.style.colors.text};
    line-height: 1.3;
    outline: none;

    font-family: 'Rubik', sans-serif;
    font-size: ${props => props.style.sizes.font.desktop};

`