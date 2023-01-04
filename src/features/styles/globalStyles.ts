import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --primary-color:#1d3b36;
    --primary25-color: #1d3b3625; 

    --secondary-color: #2C5952;
    --secondary75-color: #2C595275;
    

    --tertiary-color: #6AD9C6;

    --quaternary-color: #70E6D2;

    --quinary-color: #5EBFAF;

    --white-color: #ffffff;
    --black-color: #000000;
    --grey-color: #0e0f0e;
    --grey1-color: #0e0f0e;

    --layout-color: #161717;

    --text-color: #fefefd;

    --button-color: #70E6D2;
    --buttonHover-color: #6AD9C6;
    --buttonActive-color: #5EBFAF;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
    outline: none;
    text-decoration: none;
}

body{
    width: 100%;
    height: 100vh;
    overflow: overlay;
    font-family: 'Noto Sans', sans-serif;
    background-color: var(--black-color)
}

a{
    text-decoration: none;
    color: var(--text-color);
}

h1,h2,h3{
    color: var(--text-color);
    font-weight: bold;
    font-family: 'Noto Sans', sans-serif;
}

`;
