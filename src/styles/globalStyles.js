import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color:rgb(39, 39, 39);
    --secondary-color:rgb(231, 231, 231);
    --background-color:rgb(245, 245, 245);
    --secondary-background-color:rgb(195, 247, 255);
    --menu-background-color:rgb(255, 255, 255);
    --menu-background-color-hover:rgb(228, 225, 225);
    --header-background-color-1: rgb(221, 86, 255);
    --header-background-color-2: rgb(97, 209, 253);
    --points-background:rgb(255, 239, 98);
    --input-border-color:rgb(116, 115, 115);

    --yellow-card:rgb(250, 186, 50);
    --orange-card:rgb(252, 105, 77);
    --pink-card:rgb(255, 179, 200);
    --purple-card:rgb(233, 119, 230);
    --blue-card:rgb(75, 180, 202);
    --green-card:rgb(160, 176, 70);

    --blue-background:rgb(159, 215, 250);

    --progress-violet:rgb(180, 119, 255);
    

    --primary-button-color:rgb(39, 39, 39);
    --primary-button-text:rgb(255, 255, 255);
    --primary-button-color-hover:rgb(61, 61, 61);
    --primary-button-text-hover:rgb(255, 255, 255);

    --secondary-button-color:rgb(255, 255, 255);
    --secondary-button-text:rgb(39, 39, 39);
    --secondary-button-color-hover:rgb(214, 213, 213);
    --secondary-button-text-hover:rgb(39, 39, 39);
    
    --green-button-color:rgb(101, 184, 38);
    --green-button-text:rgb(238, 238, 238);
    --green-button-color-hover:rgb(86, 185, 89);
    --green-button-text-hover: #eeeeee;

    --red-button-color:rgb(222, 32, 50);
    --red-button-text:rgb(39, 39, 39);
    --red-button-color-hover: rgb(255, 64, 64);
    --red-button-text-hover:rgb(39, 39, 39);

    --blue-button-color:rgb(253, 253, 253);
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