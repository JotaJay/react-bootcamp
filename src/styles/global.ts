import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0; 
        padding: 0; 
        outline: 0;
        box-sizing: border-box
    }

    body {
        background-color: #F0F0F5;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 16px Roboto, sans-serif,
        
    }

    #root {
        background: pink;
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }
`;