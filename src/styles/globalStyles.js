import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #272727;
    --secondary-color: #e7e7e7;
    --background-color: #f5f5f5;
    --secondary-background-color: #d0f2f7;
    --sidebar-background-color: #ffffff;
    --input-border-color: #747373;

    --orange-card: #FFA91D;
    --green-card: #2af742;
    --blue-card:rgb(156, 217, 255);
    --red-card: #EA787E;
    --light-green-card: #50c05f;

    --progress-violet:rgb(180, 119, 255);
    

    --primary-button-color: #272727;
    --primary-button-text: #FFFFFF;
    --primary-button-color-hover: #3d3d3d;
    --primary-button-text-hover: #FFFFFF;

    --secondary-button-color: #FFFFFF;
    --secondary-button-text: #272727;
    --secondary-button-color-hover: #d6d5d5;
    --secondary-button-text-hover: #272727;
    
    --green-button-color: #65b826;
    --green-button-text: #eeeeee;
    --green-button-color-hover:rgb(86, 185, 89);
    --green-button-text-hover: #eeeeee;

    --red-button-color: #de2032;
    --red-button-text: #272727;
    --red-button-color-hover: rgb(255, 64, 64);
    --red-button-text-hover: #272727;

    --blue-button-color: #30a3d8;
    --blue-button-text: var(--primary-color);
    --blue-button-color-hover:rgb(0, 172, 252);
    --blue-button-text-hover: var(--primary-color);
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

  FormGroup {
    display: flex;
    align-items: center;
    align-self:center;
    border-radius: 4px;
    padding: 12px 16px;
    justify-content: space-between;
  }
  
 FormContainer {
    width: 100%;
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
    border-color: var(--input-border-color);
    font-size: 14px;
  }

`;