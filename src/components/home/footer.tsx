import styled from 'styled-components'
import { BreakPoint, respond } from '../_styles/media'


const FooterBox  = styled.footer`
     position: fixed; 
     bottom: 0px; 
     right: 0px; 
     height: 4.3rem; 
     width: 100%;

     border-top: 1px solid var(--grey-1);
     background-color: #fff;

     display: flex; 
     justify-content: center;
     align-items: center; 
     color: var(--text-color);



     ${respond(BreakPoint.largest,`
         position: static; 
         display: block;
         padding-left: 2rem; 

         ul{
             margin-top: 2rem; 
             display: flex; 
             flex-direction: column; 
         }

         li {
            display: block; 
            margin-bottom: 1.4rem; 
         }

     `)}

     ul {
         list-style: none;
     }

     li {
         margin-right: 2rem;
         display: inline-block;
     }

     a {
         text-decoration: none;
         font-size: 1.4rem; 
         font-weight: 700; 
         color: currentColor; 
         span {
             display: none; 
         }

         ${respond(BreakPoint.largest,`
       
            font-weight: 400 !important;   
            color:  var(--text-color);

             display:  flex; 
             align-items: center; 
             span {
                 display: block;
                 width: 3rem;
                 height:3rem; 
                 font-size: 3rem; 
               
                 margin-right: .5rem; 
                 display:  flex; 
                 align-items:center; 
                 justify-content: center; 
             }

         `)}
         
     
     }

`

export default function  Footer() {
     return <FooterBox>
        <ul>
          <li>
              <a href='https://www.easyexpresssoft.com'><span className='icon-aboutus'></span>About Us</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'><span className='icon-star'></span>Rates</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'><span className='icon-help'></span>FAQs</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
                  <span className='icon-careers'></span>
                  Careers</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>  <span className='icon-privacy'></span> Privacy</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
                 <span className='icon-legal'></span>
                  Legal
                  </a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
                  <span className='icon-security'></span>
                  Security
             </a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
                 <span className='icon-gallery'></span>
                  Accessibility
            </a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
              <span className='icon-location'></span>
              ABM Locator</a>
          </li>
          <li>
              <a href='https://www.easyexpresssoft.com'>
                 <span className='icon-chat'></span>
                  Contact Us</a>
          </li>
        </ul>        

     </FooterBox>
}

 