import styled from 'styled-components'

export enum ButtonTypes {
    white,
    transparent,
    solid,
} 

export interface ButtonProps {
     buttonType: ButtonTypes,
}

export const Button = styled.button<ButtonProps>`

     //layout 
     display: inline-block;
       
     //content 
     line-height: 1;
     text-align: center;

     //box-model 
     padding: .95rem 2rem;
     border: none; 
     border-radius: 2rem;
     font-size: 1.8rem; 
     font-weight: 300; 

     //size 
     width: auto;
     min-width: 100px;

     //animation 
     cursor: pointer;
     transition: transform .4s; 
     box-shadow: 0 .5rem 1rem  rgba(0,0,0, .2);
     
     &:hover, &:focus {
        transform: translateY(-.3rem);
        box-shadow: 0 1rem 2rem rgba(0,0,0, .2);
     }

     ${(props: ButtonProps)=> {
          const {buttonType} = props

          if (buttonType === ButtonTypes.white)
                   return `
                           background-color: #fff;
                           color: var(--primary);
                           border: 2px solid #fff;
                         `

         else if (buttonType === ButtonTypes.solid)
                   return `
                           background-color: var(--primary);
                           color: #fff;
                           border: 2px solid  var(--primary);
                         `
          return    `
                         color: #fff;
                         background-color: transparent;
                         border: 2px solid #fff;
                         &:hover{ 
                              background-color:#fff;
                              color: var(--primary);
                         }
                    `
     }}
      
`

 