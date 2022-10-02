import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #root {
        font-family: 'Rubik', sans-serif;
        font-size: clamp(1rem, 0.94rem + 0.30000000000000004vw, 1.3rem);
    }
`
export default GlobalStyled;