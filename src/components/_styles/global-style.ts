import { createGlobalStyle } from 'styled-components';


import './icon-fonts.css'
import './tangerine-fonts.css'

const GlobalStyle = createGlobalStyle`
   :root {
        
        --primary: #EA7024;
    
        --grey-1: rgb(224,224,224);

        --text-color: rgb(51,51,51);
        --tab-color: rgb(117,117,117);
       
        --shadow-dark: 0 2rem 6rem rgba(0,0,0,.3);
        --shadow-light: 0 2rem 5rem rgba(0,0,0,.06);
        --line: 1px solid var(--grey-light-2);
   }

  *,
  *::before,
  *::after
  {
      padding: 0px; 
      margin: 0px; 
      box-sizing: inherit;
  }
  *:focus {
      outline: none;
  }
  html {
        box-sizing:  border-box; 
        font-size: 62.5%;
        
  }
  body {
     font-family:  'TangerineCircular',  Arial,  Helvetica,  sans-serif;
     font-weight: 400; 
     line-height: 1.6; 
  }


  h1 {
        font-size: 2.25rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.5rem 3rem;
       
  }
  h2 {
        font-size:  1.75rem;
        font-weight: 400;
        text-transform: uppercase;
  }
  @keyframes pulsate {
         0% {
             transform: scale(1);
             box-shadow: none; 
         }
         50% {
             transform: scale(1.05);
             box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
         }
         100% {
             transform: scale(1);
             box-shadow: none; 
         }
     }
`;

export default GlobalStyle;