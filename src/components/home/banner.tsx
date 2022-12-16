import { useState } from 'react'
import styled from 'styled-components'
import { Button, ButtonTypes } from '../_shared/Button'
import { BreakPoint, respond } from '../_styles/media'

enum Tab {
	SaveWith,
	GlobalETFPortfolios,
	GreatMortgageRates,
}

const BannerBox = styled.div`
	height: 41.5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-bottom: 1px solid var(--grey-1);

	.slide-box {
		flex: 1;
		position: relative;

		.nav {
			position: absolute;
			border-radius: 50%;
			background-color: #fff;
			width: 3rem;
			height: 3rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: var(--tab-color);
			z-index: 3;

			cursor: pointer;
			transition: all 0.2s;

			&:hover {
				transform: translateY(-2px);
				box-shadow: var(--shadow-light);
			}

			i {
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 2.5rem;
				color: var(--grey-1);
			}
		}

		.nav-prev {
			top: 43%;
			left: 1rem;
		}

		.nav-next {
			top: 43%;
			right: 1rem;
		}

		${respond(
			BreakPoint.small,
			`
                 .nav {
                     display: none; 
                 }
        `
		)}

		.slide {
			height: 100%;
			width: 100%;
			position: absolute;
			left: 0;
			top: 0;
			background-color: var(--text-color);
			background-size: cover;
			visibility: hidden;

			.content {
				position: absolute;
				display: flex;
				flex-direction: column;
				align-items: flex-start;

				top: 2rem;
				left: 15rem;
				color: #fff;
				z-index: 2;
				width: 45rem;
                max-width: 100%;

				.title {
					font-size: 4.4rem;
					font-weight: 700;
					text-align: left;
					line-height: 135%;
					max-width: 90%;
				}

				.info {
					margin-top: 3.2rem;
					margin-bottom: 4rem;
					font-size: 1.6rem;
					line-height: 140%;
					max-width: 90%;
				}

				${respond(
					BreakPoint.medium,
					`
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      text-align: left;
                      padding-left: 1rem;  
                      
                      
                       .title{
                            font-size:  3rem; 
                       }

                       .info{
                            margin-top: 2.0rem; 
                            margin-bottom: 3rem; 
                            font-size: 1.4rem; 
                        }

						button {
                            padding: .5rem 1rem; 
                        }
						
               `
				)}
			}

			.img-box {
				position: absolute;
				display: block;
				right: 0;
				top: 0;
				border-bottom-left-radius: 7rem;
				width: 67rem;
				height: 100%;
			}
		}

		.saveWith .img-box {
			background-image: url('./images/bundle_desktop.jpeg');
			background-size: cover;
			${respond(
				BreakPoint.largest,
				`
                    background-image: url('./images/bundle_tablet.jpeg');
                `
			)}
		}

		.globalETFPortfolios .img-box {
			background-image: url('./images/ETF_launch_desktop.jpeg');
			background-size: cover;
			${respond(
				BreakPoint.largest,
				`
                    background-image: url('./images/ETF_launch_tablet.jpeg');
                `
			)}
		}

		.greatMortgageRates .img-box {
			background-image: url('./images/mtg-awareness-desktop.jpeg');
			background-size: cover;
			${respond(
				BreakPoint.largest,
				`
                    background-image: url('./images/mtg-awareness-tablet.jpeg');
                `
			)}
		}

		.selected {
			visibility: visible;
			animation: moveToRight 1s;
		}
	}

	.tabs {
		height: 7.6rem;
		width: 100%;
		background-color: #fff;

		list-style: none;
		display: flex;
		font-size: 1.9rem;
		color: var(--tab-color);
		font-weight: 700;

		${respond(
			BreakPoint.small,
			`
                font-size: 1.7rem; 
        `
		)}

		li {
			cursor: pointer;
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			position: relative;
			margin: 1.5rem 0;

			&:not(:last-of-type) {
				border-right: 1px solid var(--tab-color);
			}

			&.selected {
				border-right: none;
				background-color: var(--primary);
				color: #fff;
				margin: 0;

				position: relative;
				z-index: 1;
			}

			&.selected::before {
				width: 30px;
				height: 30px;
				content: '';
				transform: translateX(-50%) rotate(45deg);
				border-radius: 6px;
				background-color: var(--primary);
				position: absolute;
				z-index: -1;
				left: 50%;
				top: -11px;
			}
		}
	}

	.globalETFPortfolios .saveWith {
		border-right: none !important;
	}

	.greatMortgageRates .globalETFPortfolios {
		border-right: none !important;
	}
`

function getTabName(tab: Tab) {
	switch (tab) {
		case Tab.SaveWith:
			return 'saveWith'
		case Tab.GlobalETFPortfolios:
			return 'globalETFPortfolios'
		default:
			return 'greatMortgageRates'
	}
}

export default function Banner() {
	const [currentTab, setCurrentTab] = useState(Tab.SaveWith)

	function getTabsClass() {
		return `tabs ${getTabName(currentTab)}`
	}

	function getSlideClass(tab: Tab) {
		let res = getTabName(tab)
		if (tab === currentTab) return `slide ${res} selected`
		return `slide ${res}`
	}

	function getTabClass(tab: Tab) {
		let res = getTabName(tab)
		if (tab === currentTab) return `${res} selected`
		return res
	}

	function moveToPrev() {
		switch (currentTab) {
			case Tab.SaveWith:
				setCurrentTab(Tab.GreatMortgageRates)
				break
			case Tab.GlobalETFPortfolios:
				setCurrentTab(Tab.SaveWith)
				break
			default:
				setCurrentTab(Tab.GlobalETFPortfolios)
		}
	}

	function moveToNext() {
		switch (currentTab) {
			case Tab.SaveWith:
				setCurrentTab(Tab.GlobalETFPortfolios)
				break
			case Tab.GlobalETFPortfolios:
				setCurrentTab(Tab.GreatMortgageRates)
				break
			default:
				setCurrentTab(Tab.SaveWith)
		}
	}

	return (
		<BannerBox>
			<div className='slide-box'>
				<div className={getSlideClass(Tab.SaveWith)}>
					<div className='content'>
						<div className='title'>
							Ready to make every
							dollar count?
						</div>
						<div className='info'>
							Get a 2.10% savings rate
							when you open your first
							Savings and Chequing
							Accounts. Plus, you
							could earn $150*.
						</div>
						<Button
							buttonType={
								ButtonTypes.white
							}
						>
							Learn More
						</Button>
					</div>

					<div className='img-box'></div>
				</div>
				<div
					className={getSlideClass(
						Tab.GlobalETFPortfolios
					)}
				>
					<div className='content'>
						<div className='title'>
							Investing is in.
						</div>
						<div className='info'>
							New Global ETF
							Portfolios.In
						</div>
						<Button
							buttonType={
								ButtonTypes.white
							}
						>
							Learn More
						</Button>
					</div>

					<div className='img-box'></div>
				</div>
				<div
					className={getSlideClass(
						Tab.GreatMortgageRates
					)}
				>
					<div className='content'>
						<div className='title'>
							A mortgage rate to brag
							about
						</div>
						<div className='info'>
							Get a 5 year variable
							rate of 1.45% / 1.47%
							APR*.
						</div>
						<Button
							buttonType={
								ButtonTypes.white
							}
						>
							Learn More
						</Button>
					</div>
					<div className='img-box'></div>
				</div>
				<div
					className='nav nav-prev'
					aria-label='Previous'
					onClick={() => moveToPrev()}
				>
					<i className='icon-leftarrow'></i>
				</div>
				<div
					className='nav nav-next'
					aria-label='Next'
					onClick={() => moveToNext()}
				>
					<i className='icon-rightarrow'></i>
				</div>
			</div>

			<ul className={getTabsClass()}>
				<li
					onClick={() =>
						setCurrentTab(Tab.SaveWith)
					}
					className={getTabClass(Tab.SaveWith)}
				>
					<span>Save with&nbsp;2.10%*</span>
				</li>
				<li
					onClick={() =>
						setCurrentTab(
							Tab.GlobalETFPortfolios
						)
					}
					className={getTabClass(
						Tab.GlobalETFPortfolios
					)}
				>
					<span>Global ETF Portfolios</span>
				</li>
				<li
					onClick={() =>
						setCurrentTab(
							Tab.GreatMortgageRates
						)
					}
					className={getTabClass(
						Tab.GreatMortgageRates
					)}
				>
					<span>Great Mortgage rates </span>
				</li>
			</ul>
		</BannerBox>
	)
}
