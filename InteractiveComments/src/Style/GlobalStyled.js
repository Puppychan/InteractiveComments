import { createGlobalStyle } from "styled-components";

import { FlexCenterColumn } from "./GeneralStyled";
import { COLORS, MAIN_PAGE } from "./ConstantStyled";

const GlobalStyled = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #root {
        ${FlexCenterColumn}
        gap: ${MAIN_PAGE.gap};
        padding: ${MAIN_PAGE.padding};

        font-family: 'Rubik', sans-serif;
        font-size: clamp(1rem, 0.94rem + 0.30000000000000004vw, 1.3rem);

        min-width: 100vw;
        min-height: 100vh;

        background-color: ${COLORS.bck};
    }
`
export default GlobalStyled;