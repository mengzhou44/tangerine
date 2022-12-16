import styled from 'styled-components';
import { BreakPoint, respond } from '../_styles/media';

const Box = styled.div`
       
     max-width: 94rem;
     margin: 0 auto;
     margin-bottom: 6rem; 

     display:flex;
     justify-content:space-between; 
     align-items:center; 

     ${respond(
			BreakPoint.large,
			`
             padding-left: 3rem; 
             padding-right: 3rem; 
          
        `
	  )}


     ${respond(
			BreakPoint.medium,
			`
             flex-direction: column;
             align-items:center; 
        `
	  )}

     .left{
         p {
             font-size: 1.2rem; 
         }
         ul {
             list-style: none ;
              display: flex; 
         }

         li{
             margin-right: .5rem; 
             img{
                 width: 2.5rem;
                 height: 2.4rem; 
             }
         }

         ${respond(
			BreakPoint.medium,
			`
              p {
                  text-align: center; 
                  margin-bottom: 1rem; 
              }
              margin-bottom: 3rem; 
           `
	     )}
     }

     .right {
          display: flex;
          align-items:center; 
          font-size: 1.4rem; 
          img {
              margin-right: 1rem; 
          }
          a {
              color: var(--text-color);
          }
     }
    
`

 

export default function FollowUs() {
    return     <Box>
       <div className='left'>
           <p> Follow us</p>
           <ul>
               <li>
                   <a href='https://easyexpresssoft.com'>
                       <img src='images/twitter-circular-button.png' alt='twitter' />
                   </a>
               </li>
               <li>
                    <a href='https://easyexpresssoft.com'>
                       <img src='images/facebook-logo-in-circular-button-outlined-social-symbol.png' alt='facebook' />
                   </a>
               </li>
               <li>
                    <a href='https://easyexpresssoft.com'>
                       <img src='images/linkedincircular-button.png' alt='linkedin' />
                   </a>
               </li>
               <li>
                    <a href='https://easyexpresssoft.com'>
                       <img src='images/instagram-logo-in-circular-button-outlined-social-symbol.png' alt='instagram' />
                   </a>
               </li>
               <li>
                    <a href='https://easyexpresssoft.com'>
                       <img src='images/youtube-logo-in-circular-button-outlined-social-symbol.png' alt='youtube' />
                   </a>
               </li>
           </ul>

       </div>
       <div className='right'>
           <img src='images/deposit_en.png' alt='deposit' />
            <a href='https://easyexpresssoft.com'>CDIC Deposit Insurance Information </a>
       </div>
    </Box>
   
}