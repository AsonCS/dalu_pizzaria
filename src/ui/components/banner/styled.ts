import styled from 'styled-components'

export const BannerContainer = styled.div`
	color: var(--yellow);
	display: flex;
	flex-direction: column;
	height: fit-content;
	margin: 0px auto;
	text-align: center;
`

export const BannerContainerDiv = styled.div`
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
	height: 8em;
	width: 8em;

	@media (min-width: 481px) {
		height: 13em;
		width: 13em;
	}

	@media print {
		height: 8em;
		width: 8em;
	}
`

export const SocialDiv = styled.div`
	height: fit-content;
	margin: auto 0px;

	@media print {
		display: flex;
		flex-wrap: wrap;
		gap: 4vw;
	}
`

export const SocialContainer = styled.a`
	color: var(--yellow);
	cursor: pointer;

	img {
		cursor: pointer;
		height: 1.5em;
		margin: auto 0px;
		width: 1.5em;

		@media print {
			margin: 0px;
		}
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

export const BannerLabel = styled.label`
	display: block;
	font-size: 1.3em;
	font-weight: 700;
	letter-spacing: 0.1em;
	text-align: left;

	@media print {
		font-size: 1em;
	}
`
