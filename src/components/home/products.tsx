import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

export const ProductsBox = styled.div`
    
    width: 80%;
    margin: 0 auto;
    margin-bottom: 5rem;
    ${respond(BreakPoint.largest, `
            width: 100%; 
   `)}

    h1 {
        color: var(--text-color);
        font-size: 4.4rem;
        font-weight:700;
        text-align:center; 
        margin-top: 6rem; 
        margin-bottom: 6rem; 
        ${respond(BreakPoint.medium, `
               font-size: 3.2rem;
        `)}
    }

    .card-box {      
        width: 100%;
        display: flex; 
        justify-content: space-between;
        ${respond(BreakPoint.largest, `
           justify-content: space-around;
            flex-wrap: wrap;      
        `)}
    }

    .card { 
        width: 22.4rem; 
        height: auto;
        background-color: #fff;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items:center;
        border: 2px solid var(--card-border-color);
        padding: 4rem 3rem; 
      
        ${respond(BreakPoint.largest, `
            flex: 0  0  45%;
            margin-bottom: 2rem; 
            width:100%;
        `)}

        ${respond(BreakPoint.medium, `
            flex: 0  0  80%;
            margin-bottom: 4rem; 
        `)}
 
        h2 {
           font-size: 2.2rem;
           font-weight: 700;
           margin-bottom: 3rem; 
         
        }

        p {
            width: 18rem;
            line-height: 2.2rem; 
            height: 4.8rem; 
            margin-bottom: 5rem; 
            text-align: center;

            ${respond(BreakPoint.large, `
              width: 100%;
              margin-bottom: 2rem; 
           `)}

        }

        a,p {
           font-size: 1.8rem;  
           color: var(--text-color);
        }
        
    }

    .secure{
       
        display: flex; 
        align-items:center; 
        justify-content: space-between;
        margin-top: 5rem; 
        width: 100%;

        ${respond(BreakPoint.largest, `
            padding-left: 3rem;
            padding-right: 3rem; 
       `)}
        
        ${respond(BreakPoint.medium, `
            flex-direction: column;
            .img-box {
                order: -1; 
                img {
                    max-width: 15rem;
                    height: auto; 
                    float: none; 
                }
            }
            .text{
               margin-top: 3rem; 

               button {
                   margin-top: 2rem; 
               }
            }
        `)}

        .text{
            flex: 3;
            align-self:stretch; 
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start; 
            
            h2{
                font-size: 2.8rem; 
                font-weight: 700; 
            }

            p {
                font-size: 1.8rem;
            }
        }

        .img-box {
            flex: 1;
            img{
                 width: 80%;
                 height: auto; 
                float: right;
            }
        }
    }
`
export default function Products() {
    return  <ProductsBox>
           <h1>
              What can we help you with today?
          </h1>
          <div className="card-box">
              <div className="card">
                   <h2>Saving</h2>
                   <p>Grow your money and save for your goals.</p> 
                   <a href='#'>Learn More</a>
              </div>
              <div className="card">
                   <h2>Spending</h2>
                   <p>No-fee daily chequing. Money‑Back Credit Card.</p> 
                   <a href='#'>Learn More</a>
              </div>
       
              <div className="card">
                   <h2>Investing</h2>
                   <p>Do your future a favour.</p> 
                   <a href='#'>Learn More</a>
              </div>
       
              <div className="card">
                   <h2>Borrowing</h2>
                   <p>A smart and affordable way to borrow.</p> 
                   <a href='#'>Learn More</a>
              </div>
       
          </div>
     
          <div className="secure">
              <div className="text">
                 <h2>Safe and secure banking</h2>
                 <p>
                   Your safety and security is a top priority for us. We use proven security technology, strict privacy standards, identity confirmation controls and 24/7/365 real-time monitoring on transactions.
                 </p>
                 
                 <Button buttonType={ButtonTypes.solid} >Learn More</Button>
              </div>
              <div className="img-box">
                  <img src='images/security-checkmark.jpeg' alt='security' />
              </div>
            
          </div>
          
    </ProductsBox>
}