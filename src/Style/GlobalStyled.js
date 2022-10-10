import { createGlobalStyle } from "styled-components";

import { FlexCenterColumn } from "./GeneralStyled";
import { COLORS, MAIN_PAGE, getScreenPropsValue } from "./ConstantStyled";
const getResponsive = (props, typeValue) => {
    switch (typeValue) {
        case "cardWidth":
            return getScreenPropsValue(props.screensize, MAIN_PAGE.cardWidth)
        case "padding":
            return getScreenPropsValue(props.screensize, MAIN_PAGE.padding)
    }
}
const GlobalStyled = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #root {
        ${FlexCenterColumn}
        gap: ${MAIN_PAGE.gap};
        padding: ${props => getResponsive(props, "padding")};

        font-family: 'Rubik', sans-serif;
        font-size: clamp(1rem, 0.94rem + 0.30000000000000004vw, 1.3rem);

        min-width: 100vw;
        min-height: 100vh;

        background-color: ${COLORS.bck};
    }
    #root > div {
        width: ${props => getResponsive(props, "cardWidth")};
    }
`
export default GlobalStyled;