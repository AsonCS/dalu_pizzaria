import Item from './Item'

export default class ItemsGroup {
	constructor(
		readonly title: string = '',
		readonly items: Array<Item> = []
	) {}
}
