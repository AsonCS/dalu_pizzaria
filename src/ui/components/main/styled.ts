import styled from 'styled-components'

export const MainContainer = styled.main`
	text-align: center;
`

export const MainH2 = styled.h2`
	color: var(--orange);
	font-size: 3em;

	@media print {
		font-size: 2em;
	}
`

export const MainH3 = styled.h3`
	background-color: var(--secondary-background-color-alpha);
	color: var(--orange);
	font-size: 2em;
	margin-bottom: 1em;
	margin-top: 2em;
	position: sticky;
	top: 0px;

	@media print {
		background-color: var(--primary-background-color);
		font-size: 1em;
		margin: 0px;
	}
`

export const MenuContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	margin: 0px auto;
	width: 90vw;

	@media print {
		width: 99vw;
	}
`

export const PizzaDiv = styled.div`
	background-color: var(--secondary-background-color);
	border-radius: 0.5em;
	margin: 2vw;
	padding: 0px 1em;
	text-align: left;
	width: 86vw;

	@media (min-width: 481px) {
	}

	@media (min-width: 769px) {
		width: 41vw;
	}

	@media (min-width: 1025px) {
		width: 26vw;
	}

	@media (min-width: 1201px) {
		width: 18vw;
	}

	@media print {
		background-color: var(--primary-background-color);
		border: var(--primary-font-color) solid 1px;
		border-radius: 0.5em;
		margin: 0.5em;
		width: 23vw;
	}
`

export const PizzaDivTop = styled.div`
	display: flex;
	justify-content: space-between;
`

export const PizzaName = styled.label`
	color: var(--red);
	display: block;
	font-weight: 700;
`

export const PizzaIngredients = styled.label`
	color: var(--orange);
	font-size: 0.6em;
`

export const PizzaPrice = styled.label`
	display: block;
	font-size: 0.6em;
	height: fit-content;
	margin: auto 0px;
	white-space: nowrap;
`
