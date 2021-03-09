import styled from 'styled-components'
import { BreakPoint, respond } from '../_styles/media'

const Box = styled.div`
     color: var(--text-color);
     max-width: 94rem;
     margin: 0 auto; 
     margin-bottom: 5rem; 

     padding: 2rem;
     padding-top: 6rem; 

     h2 {
         font-size: 2.8rem;
         font-weight:  700;
         margin-bottom: 2rem; 
         text-align:center; 
     }

     p {
         font-size: 1.8rem; 
         text-align:center; 
         line-height: 140%;
         padding: 2rem; 
     }

     .awards-box {
         margin-top: 4rem; 
         display: flex;
         align-items:center; 

         img {
             height: 8rem;
             width: auto;
         }

         .award {
             text-align: center; 
         }

         ${respond(
			BreakPoint.medium,
			`
            flex-direction: column;
            .award:not(:last-of-type) {
                margin-bottom: 4rem; 
            }
        `
		)}
     }

`
export default function Awards() {
    return  <Box>
          <h2>
             Awards and Recognition
          </h2>
          <p>
              Creating a simple and convenient everyday banking experience for our Clients is at the core of everything we do. We’re very pleased to earn awards and recognition confirming that we’re making a difference in our Clients’ lives.
          </p>

          <div className="awards-box">
               <div className='award'>
                  <img src='images/GTA_top_employer_award_en.png' alt='award1' />
                  <p>2019 Greater Toronto’s Top Employers</p>
               </div>
               <div className='award'>
                  <img src='images/CSI_award_en.png' alt='award2' />
                  <p>2020 Highest in Customer Satisfaction Among the Midsize Retail Banks</p>
               </div>
               <div className='award'>
                  <img src='images/jd-power.png' alt='award3' />
                  <p>Financial Service Excellence Awards</p>
               </div>
          </div>
    </Box>
}