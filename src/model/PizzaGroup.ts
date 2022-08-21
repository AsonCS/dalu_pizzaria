import Pizza from './Pizza'

export default class PizzaGroup {
	constructor(
		readonly title: string = '',
		readonly pizzas: Array<Pizza> = []
	) {}
}
