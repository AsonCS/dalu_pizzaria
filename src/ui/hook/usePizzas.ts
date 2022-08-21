import { useEffect, useState } from 'react'
import Pizza from '../../model/Pizza'

import PizzaGroup from '../../model/PizzaGroup'

export default function usePizzas(): Array<PizzaGroup> {
	const [pizzas, setPizzas] = useState<Array<PizzaGroup>>([])

	useEffect(() => {
		fetch(
			'https://raw.githubusercontent.com/AsonCS/dalu_pizzaria/main/dalu_static/pizzas.json'
		)
			.then((res) => res.json())
			.then((pizzaGroups: Array<PizzaGroup>) => {
				pizzaGroups.forEach((pizzaGroup) => {
					if (pizzaGroup.pizzas.length % 2 !== 0) {
						pizzaGroup.pizzas.push(new Pizza('', '', 0, 0))
					}
				})
				setPizzas(pizzaGroups)
			})
			.catch((error) => {
				alert(`Ocorreu um erro ${error.message}`)
				console.error(error)
			})
	}, [])

	return pizzas
}
