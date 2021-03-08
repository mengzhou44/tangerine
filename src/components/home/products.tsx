import styled from 'styled-components'
import { BreakPoint, respond } from '../_styles/media'

export const ProductsBox = styled.div`
    
    width: 80%;
    margin: 0 auto;
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
            max-width: 40rem; 
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
        }

        a,p {
           font-size: 1.8rem;  
           color: var(--text-color);
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
     
          
    </ProductsBox>
}