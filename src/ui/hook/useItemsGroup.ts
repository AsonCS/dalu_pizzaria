import { useEffect, useState } from 'react'

import ItemsGroup from '../../model/ItemsGroup'

export default function useItemsGroup(): Array<ItemsGroup> {
	const [pizzas, setPizzas] = useState<Array<ItemsGroup>>([])

	useEffect(() => {
		fetch(
			`${process.env.PUBLIC_URL}/assets/items.json`
		)
			.then((res) => res.json())
			.then((itemsGroups: Array<ItemsGroup>) => {
				setPizzas(itemsGroups)
			})
			.catch((error) => {
				alert(`Ocorreu um erro ${error.message}`)
				console.error(error)
			})
	}, [])

	return pizzas
}
