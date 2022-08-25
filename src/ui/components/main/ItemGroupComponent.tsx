import React from 'react'

import Item from '../../../model/Item'
import * as Styled from './styled'

interface Props {
	item: Item
}

export default function ItemGroupComponent(props: Props) {
	return (
		<Styled.ItemDiv>
			<Styled.ItemDivTop>
				<Styled.ItemName>{props.item.name}</Styled.ItemName>
				<Styled.ItemPrice>
					{props.item.bigPrice} | {props.item.smallPrice}
				</Styled.ItemPrice>
			</Styled.ItemDivTop>
			<Styled.ItemDescription>
				{props.item.description}
			</Styled.ItemDescription>
		</Styled.ItemDiv>
	)
}
