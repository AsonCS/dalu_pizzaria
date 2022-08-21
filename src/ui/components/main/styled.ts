import styled from 'styled-components'

export const MainContainer = styled.main`
	text-align: center;
`

export const MainH2 = styled.h2`
	color: var(--orange);
	font-size: 3em;
`

export const MainH3 = styled.h3`
	color: var(--orange);
	font-size: 2em;
	margin-bottom: 1em;
	margin-top: 2em;
`

export const MenuContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1em;
	justify-content: space-around;
`

export const EmptyDiv = styled.div`
	width: 40vw;
`

export const PizzaDiv = styled.div`
	background-color: var(--secondary-background-color);
	border-radius: 0.5em;
	padding: 0px 1em;
	text-align: left;
	width: 40vw;
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
