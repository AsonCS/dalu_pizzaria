import React from 'react'

import ItemGroupComponent from './ItemGroupComponent'
import ItemsGroup from '../../../model/ItemsGroup'
import usePizzaGroups from '../../hook/useItemsGroup'
import Item from '../../../model/Item'
import * as Styled from './styled'

export default function Main() {
	const pizzaGroups = usePizzaGroups()

	const getPizzas = (item: Item, idx: number) => {
		return <ItemGroupComponent key={`${idx}-${item.name}`} item={item} />
	}

	const getPizzaGroups = (pizzaGroup: ItemsGroup, idx: number) => {
		return (
			<article key={`${idx}-${pizzaGroup.title}`}>
				<Styled.MainH3>{pizzaGroup.title}</Styled.MainH3>
				<Styled.MenuContainer>
					{pizzaGroup.items.map((item, idx) => getPizzas(item, idx))}
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
