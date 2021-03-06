import { createGlobalStyle } from 'styled-components';


import './icon-fonts.css'
import { BreakPoint, respond } from './media';
import './tangerine-fonts.css'

const GlobalStyle = createGlobalStyle`
   :root {
        
        --primary: #EA7024;
    
        --grey-1: rgb(224,224,224);

        --text-color: rgb(51,51,51);
        --tab-color: rgb(117,117,117);
        --card-border-color:  #e0e0e0;
        --feedback: #757575;
        --seperator: rgb(193,194,194);
       
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
      font-size: 4.4rem;
      font-weight:  700;

      ${respond(
			BreakPoint.medium,
			` 
                font-size: 3.8rem;
     
              `
       )}
  }
 
  h2 {
      font-size: 2.8rem;
      font-weight: 700; 

      ${respond(
			BreakPoint.medium,
			` 
              font-size: 2.4rem;
          `
       )}
  }

  p {
      font-size: 1.8rem; 
      line-height: 140%;
      ${respond(
			BreakPoint.medium,
			` 
              font-size: 1.4rem;
          `
       )}
  }

  @keyframes moveToRight {
        0% {
            transform: translateX(-100%);
        }
        100% {
           transform: translateX(0)  
        }
  }


  @keyframes fadeout {
        0% {
            opacity: 1;
            visibility: visible; 
        }
        100% {
            opacity: 0; 
            visibility: hidden;
        }
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