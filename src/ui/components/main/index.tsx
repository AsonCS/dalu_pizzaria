import React from 'react'
import Pizza from '../../../model/Pizza'
import PizzaGroup from '../../../model/PizzaGroup'

import usePizzaGroups from '../../hook/usePizzas'
import PizzaGroupComponent from './pizzaGroup'
import * as Styled from './styled'

export default function Main() {
	const pizzaGroups = usePizzaGroups()

	const getPizzas = (pizza: Pizza, idx: number) => {
		return (
			<PizzaGroupComponent key={`${idx}-${pizza.name}`} pizza={pizza} />
		)
	}

	const getPizzaGroups = (pizzaGroup: PizzaGroup, idx: number) => {
		return (
			<article key={`${idx}-${pizzaGroup.title}`}>
				<Styled.MainH3>{pizzaGroup.title}</Styled.MainH3>
				<Styled.MenuContainer>
					{pizzaGroup.pizzas.map((pizza, idx) =>
						getPizzas(pizza, idx)
					)}
				</Styled.MenuContainer>
			</article>
		)
	}

	return (
		<Styled.MainContainer>
			<Styled.MainH2>Cardápio</Styled.MainH2>
			{pizzaGroups.map((pizzaGroup, idx) =>
				getPizzaGroups(pizzaGroup, idx)
			)}
		</Styled.MainContainer>
	)
}
