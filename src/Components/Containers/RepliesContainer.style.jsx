import styled from "styled-components";
import { CARD } from "../../Style/ConstantStyled";
export const RepliesContainer = styled.div`
    /* display: flex; */
    display: grid;
    ${props => props.screensize == 'desktop' ? `
        grid-template: 
        "divider content" auto/
        0.1fr 0.9fr;
        padding: 0 0 0 1.1em;
    `:`
    grid-template: 
        "divider content" auto/
        0.1fr 3.4fr;
    `}
    
    justify-content: space-between;
    align-items: center;
    width: 100%;

    height:  100%;
    gap: ${CARD.read.sizes.gap};
    position: relative;
`