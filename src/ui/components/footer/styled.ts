import styled from 'styled-components'

export const BannerDiv = styled.div`
	@media print {
		display: none;
	}
`

export const QrCodesDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	gap: 5vw;

	@media print {
		margin-top: 1em;
	}
`

export const ImageContainer = styled.figcaption`
	text-align: center;
	width: 70vw;

	img {
		margin: 0px auto;
		width: 8em;

		@media (min-width: 481px) {
			width: 13em;
		}

		@media print {
			font-size: 0.5em;
		}
	}

	label {
		color: var(--yellow);
	}

	@media (min-width: 769px) {
		width: 35vw;
	}

	@media print {
		width: 20vw;
	}
`

export const Footer = styled.footer`
	padding-bottom: 10em;

	@media print {
		padding-bottom: 0em;
	}
`
