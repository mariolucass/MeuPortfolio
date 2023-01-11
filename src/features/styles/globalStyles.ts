import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#1d3b36;
    --primary25-color: #1d3b3625; 

    --secondary-color: #2C5952;
    --secondary75-color: #2C595275; 
    
    --tertiary-color:#5EBFAF;

    --quaternary-color: #6AD9C6;

    --quinary-color: #70E6D2;

    ///////
    ///////
    ///////

    --white-color: #ffffff;
    --black-color: #000000;

    --grey-color: #0e0f0e;
    --grey1-color: #0e0f0e;

    --layout-color: #161717;

    ///////
    ///////
    ///////

    --button-color: var(--secondary-color);
    --buttonHover-color:var(--tertiary-color);
    --buttonActive-color:var(--quaternary-color);
 
    ///////
    ///////
    ///////

    --font: 'Inter', sans-serif;
    --text-color: #fefefd;
    --paragraph-color: #fefefd;

    ///////
    ///////
    ///////

    --curve: 40px;

    ///////
    ///////
    ///////

    --toastify-font-family: 'Inter', sans-serif;
    --toastify-color-progress-info: var(--primary-color);
    --toastify-spinner-color: var(--primary-color);
}

#root{
    width:100vw;
    height:100vh;
}

* {
    padding: 0;
    margin: 0;

    box-sizing: border-box;
   
    outline: none;
    text-decoration: none;
    list-style: none;

    border: 0;
}

body {
    width: 100vw;
    height: 100vh;

    overflow: overlay;

    font-family: var(--font);
    
    background-color: var(--black-color);

    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    }

    ::-webkit-scrollbar-thumb {
    background: transparent; 
    background-color: var(--secondary-color); 
    }

    ::-webkit-scrollbar-track {
    background: transparent;
    }
}

h1,h2,h3,a {
    color: var(--text-color);
    font-weight: bold; 
}

h4 {
    color:var(--secondary-color)
}

p {
    color: var(--paragraph-color)
}

button, a{
    font-family: var(--font);
}

input{
    ::placeholder{
        font-family: var(--font);
    }
}
`;
