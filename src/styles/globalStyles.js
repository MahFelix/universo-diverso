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
    --light-green-card:rgb(80, 192, 95);
    --background-color: #f5f5f5;
    --sidebar-bg: #ffffff;
    --text-color: #333;
    --card-text: #ffffff;
    --login-bg: #d0f2f7;
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
    cursor: pointer;
  }
`;