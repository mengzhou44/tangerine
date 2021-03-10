import React, {useState } from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'
import Navigation from './navigation.js'

const HeaderBox = styled.header`
    
        height: 6.9rem; 
        width: 100%; 
        background-color: var(--primary);
        padding: .5rem 2rem; 
        padding-bottom: 0rem; 
        color: #fff;
    
        display: flex; 
        align-items: center; 
        justify-content: space-between;
    
       .menu {
            background-color: transparent; 
            font-size: 4rem; 
            width: 4rem;
            height: 4rem;
            margin-top: -1rem; 
            display: none; 
            cursor: pointer;
       }

       .logo {
            margin-right: 2rem;
            padding-top: 1.3rem;  
            img {
                height: 3rem;
                width: auto;
                max-width: inherit;  
            }

         
       }

       ul {
           padding-left: 2rem; 
           margin-right: auto; 
           list-style: none;
       }


       li {
          display: inline-block; 
          &:not(:last-of-type) {
              margin-right: 2rem; 
          }

          a { 
                font-size: 1.9rem;
                font-weight: 700; 
                color:  currentColor;
                text-decoration: none; 
                padding-bottom: 1.6rem;
                transition: all .2s; 
                border-bottom: 4px solid transparent;
                
                &:hover{
                    border-bottom: 4px solid #fff;
                }
         }
   
    }

    .buttons {
       display: flex; 
       flex: 0 0 30%;
       justify-content: space-between; 

       button {
           padding: .6rem 1rem; 
           font-size: 1.6rem;
       }
    }

    .language {
        display: flex; 
        align-items:center;
        
        .fr{
             
            display: flex; 
            align-items:center;
            justify-content: center; 
            font-size:1.8rem;
        }
    }
    .icon-search, .icon-location{
       
        display: flex; 
        align-items: center; 
    
        font-size: 2.5rem;
        height: 3rem;
        width: 3rem; 
        background-color: transparent; 
        transition:  all .2s; 
        border-radius: 50%;
        
        &:hover{
            background-color: rgba(0,0,0,.1);
        }
    }

    ${respond(BreakPoint.largest,
            `  
                .menu {
                   display: block;  
                } 

                .logo {
                    padding-top: 0rem; 
                    margin-right: 0rem; 
                }

                .products {
                   display:none; 
                } 

                .buttons {
                    button, 
                    .language,
                    .icon-location {
                        display: none; 
                    }

                    display: block; 
                    flex: 0; 
                }

                .icon-search {
                    font-size: 3rem; 
                    height: 4rem;
                    width: 4rem; 
                }

            `
      )}
`
 
export default function Header(){
     const [showNav, setShowNav] = useState(false)

     function renderNavigation() {
          if (showNav === true) {
              return <Navigation onClose={()=> setShowNav(false)}/>
          }
     }
     return <HeaderBox>
        
          <div className='menu' onClick={()=>  setShowNav(true)}>
              <i  className='icon-hamburgermenu' aria-label='Menu opens dialog'></i>
        </div>
         <a href='#' className='logo'>
            <img src='./images/brand.png' alt='brand' />
         </a>
        <ul className='products'>
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
        <div className='buttons'>
            <Button buttonType={ButtonTypes.white}>Sign Me Up</Button>
            <Button buttonType={ButtonTypes.transparent}>Log Me In</Button>

            <span className='language'>
             <span className='material-icons'>language</span>
             <span className='fr'>FR</span>
            </span>
            <i className='icon-location' />
            <i className='icon-search' />
          
        </div>
        {renderNavigation()}
     </HeaderBox>
} 