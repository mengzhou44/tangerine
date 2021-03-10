import styled from 'styled-components'
import { BreakPoint, respond } from '../_styles/media'


const FeedbackBox = styled.div`

    position: fixed; 
    right:0;
    top: 50%;
    transform: translateY(-50%);

    width:8rem;
    height:3rem; 
    background-color: var(--feedback);
    transform: rotate(90deg) translateY(-2.4rem);
    
    display: flex; 
    justify-content: center; 
    align-items:center; 
    color: #fff; 
    cursor: pointer; 
    border-radius: 0 0 5px 5px; 

    font-size: 1.4rem; 

    ${respond(
			BreakPoint.medium,
			`
               display:none;
            `
    )}

`

export default function  Feedback() {
    return   <FeedbackBox>
          Feedback
      </FeedbackBox>
}