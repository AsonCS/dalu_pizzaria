import React from 'react'
import { writeFile } from 'fs'

import ItemsGroup from '../../model/ItemsGroup'
import { toCapitalize } from '../../utils'
import Item from '../../model/Item'

describe('Format json source file', () => {
	let itemsGroups: Array<ItemsGroup>
	it('Load json file', () => {
		itemsGroups = require('../assets/dalu_static-items.json')
		// console.log(itemsGroups)
	})

	it('Apply lowercase', () => {
		itemsGroups = itemsGroups.map((itemsGroup) => {
			const title = toCapitalize(itemsGroup.title)

			const items: Array<Item> = itemsGroup.items.map((item) => {
				return new Item(
					toCapitalize(item.name),
					item.description.toLowerCase(),
					parseFloat(item.bigPrice).toFixed(2),
					parseFloat(item.smallPrice).toFixed(2)
				)
			})

			const newItemsGroup = new ItemsGroup(title, items)
			console.log(newItemsGroup.title)
			console.log(newItemsGroup.items[0])
			// console.log(newItemsGroup)
			return newItemsGroup
		})
		// console.log(itemsGroups)
	})

	it('Write to output file', async () => {
		await writeFile(
			'./public/assets/items.json',
			JSON.stringify(itemsGroups),
			(error) => {
				expect(error).toBeNull()
			}
		)
	})
})
