import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

const Box = styled.div`
	display: block;
	height: 54.1rem;

	background-image: url('images/H2_banner_desktop.jpg');
	background-position: 50% 50%;
	background-size: cover;

	margin-bottom: 5rem;

	display: flex;
	align-items: center;

	.wrapper {
		width: 80%;
		margin: 0 auto;

        ${respond(BreakPoint.largest, `
            width: 100%;
            padding-left: 3rem;
            padding-right: 3rem; 
        `)}


		.card {
			height: auto;
			background-color: #fff;
			border-radius: 6px;
            max-width:50rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 2px solid var(--card-border-color);
			padding: 3rem; 

			h2 {
				font-size: 3rem;
				font-weight: 700;
				margin-bottom: 3rem;
			}

			p {
				font-size:1.8rem; 
				line-height: 2.2rem;
                color: var(--text-color);
		 
				${respond(
					BreakPoint.large,
					`
                        width: 100%;
                        margin-bottom: 2rem; 
                    `
				)}
			}
 
            button { 
              margin-top:2rem; 
            }
          
		 
		}
	}
`

export default function BecomeClient() {
	return (
		<Box>
			<div className='wrapper'>
				<div className='card'> 
                    <h2>
                       Why become a Client?
                    </h2>

                    <p>
                      As a Tangerine Client, you’ll get great interest rates, no unfair fees and banking options to help you reach your financial goals. Become a Client today and start enjoying the benefits of forward banking.
 
                    </p>

                    <Button buttonType={ButtonTypes.solid}>Sign Up</Button>

                </div>
			</div>
		</Box>
	)
}
