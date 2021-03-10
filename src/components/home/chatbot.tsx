import styled from 'styled-components'
import { BreakPoint, respond } from '../_styles/media'


const ChatbotBox = styled.div`
    //layout 
    position: fixed;
    z-index:9;
    bottom: 5rem;
    right: 3rem;
    width: 5rem;
    height: 5rem;
    transition: visibility 0.3s, opacity 0.3s, bottom 0.3s;

    //content
    text-align: center;
    background-color: white;   
    padding: 6px;
  

    //box 
    cursor: pointer;
    outline: none;
    box-shadow: -2px -2px 15px 1px rgb(0 0 0 / 50%);
    border: solid 1px rgba(193,193,194,0.3);
    border-radius: 50%;
    box-sizing: content-box;
 
    .icon-messaging {
        font-size: 4rem;
        color: var(--primary);
        display: flex; 
        justify-content: center; 
        align-items:center; 
    }

    &:hover {
       border: none; 
       box-shadow: none; 
    }

    ${respond(
			BreakPoint.medium,
			`
               display:none;
            `
    )}

`

export default function  Chatbot() {
    return   <ChatbotBox>
         <span className='icon-messaging'></span>
      </ChatbotBox>
}

