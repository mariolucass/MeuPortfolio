import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --primary-color:#1d3b36;
    
    --primary25-color: #1d3b3625; 

    --secondary-color: #2C5952;
    --secondary75-color: #2C595275;
    

    --tertiary-color:#5EBFAF ;

    --quaternary-color: #6AD9C6;

    --quinary-color: #70E6D2;

    --white-color: #ffffff;
    --black-color: #000000;
    --grey-color: #0e0f0e;
    --grey1-color: #0e0f0e;

    --layout-color: #161717;

    --text-color: #fefefd;
    --paragraph-color: #7f7f7f;

    --button-color: #70E6D2;
    --buttonHover-color: #6AD9C6;
    --buttonActive-color: #5EBFAF;

    --toastify-font-family: 'Inter', sans-serif;
    --toastify-color-progress-info: var(--primary-color);
    --toastify-spinner-color: var(--primary-color);

    --font: 'Inter', sans-serif
}

* {
    padding: 0;
    margin: 0;

    border: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
}

body {
    width: 100vw;
    height: 100vh;

    overflow: overlay;

    font-family: var(--font);
    background-color: var(--black-color);
}

a { 
    color: var(--text-color);
}

h1,h2,h3 {

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
