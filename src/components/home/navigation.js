import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { LinkButton } from '../_shared/LinkButton'
 

const NavigationBox =  styled.div`
   position: fixed;
  
   top: 0; 
   left: 0; 
   width: 100%;
   height: 100%;
   z-index: 1000; 
   background-color: rgba(0,0,0, .7);

   animation: moveToRight .5s;  

  
`

export default function Navigation({onClose}) {
     return <NavigationBox>  
               <Content onClose={onClose} />
     </NavigationBox>
}

const ContentBox =  styled.div`
       position: absolute; 
       left:0;
       top: 0;
       width:  30rem;
       height: 100%;  
       
       display: flex; 
       flex-direction: column;
       background-color: #fff;
       z-index: 1001; 
       overflow: auto;
     
       .nav-buttons {
           flex: 0 0 10rem;
           position: relative; 
          
           background-color: var(--primary);
           display: flex; 
           flex-direction: column;
           justify-content: center; 
           padding: 3rem 0rem; 
           padding-left: 2rem;
     
           button {
               width: 18rem; 
               &:not(:last-of-type) {
                   margin-bottom: 1rem;
               }
           }

           .icon-x {
               position: absolute; 
               top: 1rem; 
               right: 1rem; 
               font-size: 2rem; 
               cursor: pointer; 
           }
           

       }

       .nav-products {
           width: 100%; 
         
           
           li {
               padding-left: 2rem; 
               
               border-left: 3px solid #fff;
               display: block; 
               &:not(:last-of-type) {
                  margin-bottom: 2rem; 
               }  

               &:hover {
                 border-left: 3px solid var(--text-color); 
              }
           }

           a {
              color: var(--text-color);

              
           }
       }

       .nav-links{
           margin-top: 3rem; 
           display: flex; 
           padding: 2rem; 
           flex-direction: column;
           align-items: flex-start;


           button {
               display: flex; 
               justify-content: flex-start;
               align-items: center; 
               margin-bottom: 1rem; 
               font-size: 1.4rem; 
 
               span {
                    margin-right: .5rem; 
                    width: 3rem;
                    height: 3rem; 
                    display: flex; 
                    justify-content:center;
                    align-items:center;
                    font-size:3rem;
               }
           }
       }
`

export function Content({onClose}) {
     return <ContentBox>
         <div className='nav-buttons'>
             <div className='icon-x' onClick={()=> onClose()}></div>
            <Button buttonType={ButtonTypes.white}>Sign Me Up</Button>
            <Button buttonType={ButtonTypes.transparent}>Log Me In</Button>
        </div>
       
        <ul className='nav-products'>
             <li>
                 <a href='#'>
                   Products
                </a>
            </li>
            <li>
                <a href='#'>
                  Ways to Bank 
                </a>
            </li>
            <li>
                <a href='#'>
                 Blog
                </a>
            </li>
            <li>
                <a href='#'>
                About Us
                </a>
            </li>
        </ul>

        <div className='nav-links'>
            <LinkButton>
              <span> <i className="material-icons"> language</i></span>Francis
            </LinkButton>
          
            <LinkButton>
               <span className="icon-chat"></span> Contact Us 
            </LinkButton>
            <LinkButton>
               <span className="icon-star"></span> Rates 
            </LinkButton>

            <LinkButton>
                <span className="icon-help"></span> FAQs 
            </LinkButton>
               
            <LinkButton>
                <span className="icon-loading"></span> Feedback
            </LinkButton>
            
         </div>

        </ContentBox>
}
