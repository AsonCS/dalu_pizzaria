import React from 'react'

import Pizza from '../../../model/Pizza'
import * as Styled from './styled'

interface Props {
	pizza: Pizza
}

export default function PizzaGroupComponent(props: Props) {
	return (
		<Styled.PizzaDiv>
			<Styled.PizzaDivTop>
				<Styled.PizzaName>{props.pizza.name}</Styled.PizzaName>
				<Styled.PizzaPrice>
					{props.pizza.bigPrice} | {props.pizza.smallPrice}
				</Styled.PizzaPrice>
			</Styled.PizzaDivTop>
			<Styled.PizzaIngredients>
				{props.pizza.ingredients}
			</Styled.PizzaIngredients>
		</Styled.PizzaDiv>
	)
}
