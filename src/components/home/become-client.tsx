import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

const Box = styled.div`
 
	height: 54.1rem;
	margin-bottom: 5rem;
	position: relative;  

    display:flex;
    align-items:center; 

	${respond(
		BreakPoint.medium,
		`
            height: auto;
        `
	)}

	.wrapper {
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
			width: 50rem;
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

	.img-box {
		position: absolute;
		top: 0;
		left: 0;
        height:100%;
        width: 100%;

		z-index: -1;

	 
		${respond(
			BreakPoint.medium,
			`
                        position: static;
                        height:auto;
                        margin-bottom:2rem; 
                        overflow: hidden;

                        img{
                            object-fill: cover; 
                        }
                    `
		)}
	}
`

export default function BecomeClient() {
	return (
		<Box>
			<div className='wrapper'>
				<div className='img-box'>
					<img
						src='images/H2_banner_desktop.jpg'
						alt='photo'
					/>
				</div>

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
						Sign Up
					</Button>
				</div>
			</div>
		</Box>
	)
}
