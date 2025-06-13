import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #272727;
    --secondary-color: #e7e7e7;
    --background-color: #f5f5f5;
    --orange-card: #FFA91D;
    --green-card: #2af742;
    --blue-card: #3fb4fd;
    --red-card: #EA787E;
    --light-green-card: #50c05f;
    --progress-violet:rgb(125, 54, 212);
    --sidebar-bg: #ffffff;
    --text-color: #333333;
    --card-text: #ffffff;
    --login-bg: #d0f2f7;
    --border-input: #747373;

    --primary-button-color: #272727;
    --primary-button-text: #FFFFFF;
    --primary-button-color-hover: #3d3d3d;
    --primary-button-text-hover: #FFFFFF;

    --secondary-button-color: #FFFFFF;
    --secondary-button-text: #272727;
    --secondary-button-color-hover: #d6d5d5;
    --secondary-button-text-hover: #272727;
    
    --green-button-color:rgb(40, 197, 45);
    --green-button-text: #eeeeee;
    --green-button-color-hover:rgb(83, 197, 87);
    --green-button-text-hover: #eeeeee;

    --red-button-color:rgb(255, 77, 77);
    --red-button-text: #272727;
    --red-button-color-hover: rgb(255, 64, 64);
    --red-button-text-hover: #272727;

    --blue-button-color:rgb(3, 104, 151);
    --blue-button-text: #ffffff;
    --blue-button-hover: #a9d8ee;
    --blue-button-color-hover: #d9eaf1;
    --blue-button-text-hover: #046d9e;
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
    background: var(--primary-button-color);
    color: var(--primary-button-text);
    font-size: 16px;
    border: none;
    border-radius: 6px;
  }
  
  button:hover {
    background: var(--primary-button-color-hover);
    color: var(--primary-button-text-hover);
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