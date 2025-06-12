import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #54c1d3;
    --secondary-color: #88e0ef;
    --orange-card: #FFA91D
    ;
    --green-card: #2af742;
    --blue-card: #1ba7ff;
    --red-card: #EA787E;
    --light-green-card:#50c05f;
    --background-color: #f5f5f5;
    --sidebar-bg: #ffffff;
    --text-color: #333;
    --card-text: #ffffff;
    --login-bg: #d0f2f7;
    --button-color: #000;
    --button-text: #FFF;
    --button-hover: #333;
    --border-input:#747373;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    background-color: var(--background-color);
    min-height: 100vh;
  }

  button {
    width: 300px;
    height: 45px;
    cursor: pointer;
    background: var(--button-color);
    color: var(--button-text);
    font-size: 16px;
    border: none;
    border-radius: 6px;
  }
  
  button:hover {
    background: var(--button-hover);
  }
  
  Link {
    width: '100%';
    textDecoration: 'none';
  }

  Input {
    width: 300px;
    height: 35x;
    padding: 12px;
    border: 1px solid ;
    border-radius: 6px;
    border-color: var(--border-input);
    font-size: 14px;
  }

`;