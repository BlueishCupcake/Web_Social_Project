import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Global = createGlobalStyle`
    ${reset}

    :root{
        --black: #212121;
        --dark-black: #111111;
        
        --brown: #2a2426;
        
        --grey: #323342;
        
        --white: #e0e0e1;

        --red: #f11818;
        --dark-red: #e43d2c;

        --blue: #46329a;
    }

    *{
        box-sizing: border-box;
        font-family: inherit;
    }
    
    body {
        background-image: url("noise.png");
        background-color: var(--black);
    }
`;
