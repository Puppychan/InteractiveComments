import styled from "styled-components";
import { CARD } from "../../Style/ConstantStyled";
export const RepliesContainer = styled.div`
    /* display: flex; */
    display: grid;
    grid-template: 
    "divider content" auto/
    0.1fr 0.9fr;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 0 1.1em;
    height:  100%;
    gap: ${CARD.read.sizes.gap};
    position: relative;
`