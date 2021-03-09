import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

const Box = styled.div`

   margin-bottom: 5rem;
   .top { 
        height: 54.1rem;
      
        position: relative;
        background-image: url('images/H2_banner_desktop.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

        margin-bottom: 5rem;

        display: flex;
    	align-items: center;
   }

   .bottom {
       display:none; 
   }

   ${respond(
			BreakPoint.medium,
			`
            .bottom {
                display: block; 
            }

            .top .content {
                display: none; 
            }
        `
	)}


   .content {
		width: 80%;
		margin: 0 auto;

		${respond(
			BreakPoint.largest,
			`
            width: 100%;
            padding-left: 3rem;
            padding-right: 3rem; 
        `
		)}

		.card {
			height: auto;
			background-color: #fff;
			border-radius: 6px;
			width: 56%;
			display: flex;
			flex-direction: column;
			align-items: center;
			border: 2px solid var(--card-border-color);
			padding: 3rem;
			z-index: 2;

			h2 {
				font-size: 3rem;
				font-weight: 700;
				margin-bottom: 3rem;
			}

			p {
				font-size: 1.8rem;
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
				margin-top: 2rem;
			}

			${respond(
				BreakPoint.medium,
				`
                      width:100%;
                    `
			)}
		}
	}
`

export default function BecomeClient() {
	function renderContent() {
		return (
			<div className='content'>
				<div className='card'>
					<h2>Why become a Client?</h2>
					<p>
						As a Tangerine Client, you’ll
						get great interest rates, no
						unfair fees and banking options
						to help you reach your financial
						goals. Become a Client today and
						start enjoying the benefits of
						forward banking.
					</p>

					<Button buttonType={ButtonTypes.solid}>
						Sign Me Up
					</Button>
				</div>
			</div>
		)
	}
	return <Box>
         <div className="top">
            {renderContent()}
         </div>
         <div className="bottom">
            {renderContent()}
         </div>
            
        </Box>
}
