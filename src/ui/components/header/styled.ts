import styled from 'styled-components'

export const HeaderContainer = styled.header`
	color: var(--yellow);
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 0px auto;
	text-align: center;

	h2 {
		font-size: 2em;
	}
`

export const HeaderContainerDiv = styled.div`
	display: flex;
	flex-direction: column;
	height: fit-content;
	justify-content: center;
	margin: 0px auto 3em;

	@media (min-width: 768px) {
		flex-direction: row;
		flex-wrap: nowrap;
		margin: 0px auto;
	}
`

export const LogoImage = styled.h1`
	height: 13em;
	width: 13em;
`

export const SocialDiv = styled.div`
	height: fit-content;
	margin: auto 0px;
`

export const SocialContainer = styled.a`
	color: var(--yellow);
	cursor: pointer;

	img {
		cursor: pointer;
		height: 1.5em;
		margin: auto 0px;
		width: 1.5em;
	}

	figcaption {
		cursor: pointer;
		display: flex;
		margin: 1em 0px;
	}

	label {
		cursor: pointer;
		display: block;
		font-size: 0.7em;
		font-weight: 700;
		height: fit-content;
		letter-spacing: 0.1em;
		margin: auto 0.5em;
		text-align: left;
	}
`

export const HeaderLabel = styled.label`
	display: block;
	font-size: 1.3em;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-align: left;
`
