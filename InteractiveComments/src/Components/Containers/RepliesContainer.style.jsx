import styled from "styled-components";
import { CARD } from "../../Style/ConstantStyled";
export const RepliesContainer = styled.div`
    display: grid;
    width: ${CARD.main.sizes.width.desktop};
    grid-template:
    /* "divider card" auto
    "divider card" auto/
    1fr auto */
    "divider card card card card" auto
    "divider card card card card" auto /
    0.37fr auto 1fr 1fr auto;
`