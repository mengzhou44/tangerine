import React from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

const Box = styled.div`
	max-width: 94rem;
	margin: 0 auto;
	margin-bottom: 5rem;
     color: var(--text-color);

	h2 {
		margin-bottom: 3rem;
		text-align: center;
	}

	.articles-box {
		overflow: hidden;
		
		display: flex;
		justify-content: space-between;

          ${respond(
			BreakPoint.medium,
			`
                 flex-direction: column; 
                 width: 80%;
                 margin: 0 auto; 
              `
          )}
	}

	.article {
		flex: 0 0 47%;
		border: 2px solid var(--grey-1);
		border-radius: 3px;
		overflow: hidden;
          img {
			height: 25rem;
			width: 100%;
			display: block;
		}

          ${respond(
			BreakPoint.medium,
			`
                 img {
                      width: 100%;
                      height: auto; 
                 }
                 &:not(:last-of-type) {
                      margin-bottom: 3rem; 
                 }
              `
          )}
	}

	.content {
		padding: 2rem;
		padding-top: 3rem;

          .title {
               height: 7.6rem; 
               font-size: 2.8rem; 
               font-weight: 700; 
               margin-bottom: 2rem; 
               line-height: 140%;
          }
          .text {
               font-size: 1.8rem; 
               font-weight: 400; 
               margin-bottom: 2rem; 
               line-height: 120%;
          }

          ${respond(BreakPoint.medium, `
             .text {
                 display: none;
             }
                    
           `)}

	}
`

export default function Articles() {
	return (
		<Box>
			<h2>Check out these helpful articles</h2>
			<div className='articles-box'>
				<div className='article'>
					<img
						src='images/What-are-ETFs-2_600x333.jpg'
						alt='article1'
					/>
					<div className='content'>
						<div className='title'>
							What are ETFs?
						</div>
						<div className='text'>
							ETF stands for
							Exchange-Traded Fund.
							That might sound like an
							abstract term, so let me
							give you a rough
							definition: you can
							think of ETFs as just
							investment...
						</div>
						<Button
							buttonType={
								ButtonTypes.solid
							}
						>
							Read More
						</Button>
					</div>
				</div>
				<div className='article article-right'>
					<img
						src='images/Protecting-Yourself-Against-Fraud_600x333.jpg'
						alt='article2'
					/>
					<div className='content'>
						<div className='title'>
							Protecting Yourself
							Against Fraud
						</div>
						<div className='text'>
							According to one
							prominent cyber security
							expert, if you're over
							the age of 18, it's very
							likely that your
							personal information has
							been compromised. With
							a...
						</div>
						<Button
							buttonType={
								ButtonTypes.solid
							}
						>
							Read More
						</Button>
					</div>
				</div>
			</div>
		</Box>
	)
}
