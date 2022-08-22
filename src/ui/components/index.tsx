import React from 'react'

import * as Styled from '../styled'
import Banner from './banner'
import Main from './main'

export default function App() {
	return (
		<>
			<header>
				<Banner />
			</header>
			<Main />
			<Styled.Footer>
				<Banner />
			</Styled.Footer>
		</>
	)
}
