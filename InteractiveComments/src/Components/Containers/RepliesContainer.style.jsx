import styled from "styled-components";
import { CARD } from "../../Style/ConstantStyled";
export const RepliesContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 0 0 1.1em;
    height:  100%;
    gap: ${CARD.main.sizes.gap};
    position: relative;
`