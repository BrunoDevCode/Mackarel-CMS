import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: 0;
    box-sizing: border-box;
  }
  
  button {
    background: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  body, button, input {
    font-family: Roboto, sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #__next {
    min-height: 100%;
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color:  rgba(0, 0, 0, .15);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2px;
    // background-color: ${(props) => props.theme.colors.primary};
  }

  ::-webkit-scrollbar-thumb:hover {
    // background-color: ${(props) => props.theme.colors.darkPrimary};
  }
`;