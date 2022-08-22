import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	html,
	body {
		background-color: var(--primary-background-color);
		color: var(--primary-font-color);
		font-family: var(--font-main);
		line-height: 1.6;
		font-size: 1em;
	}
	#__next {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
	}
	img {
		max-width: 100%;
		height: auto;
		display: block;
	}
	a {
		color: #ffffff;
		cursor: pointer;
		text-decoration: none;
	}
	a:hover {
		color: #ffffff;
		text-decoration: none;
	}
	a:active {
		color: #ffffff;
		text-decoration: none;
	}
	button {
		border: none;
		border-radius: 0.5em;
		cursor: pointer;
		font-family: var(--font-main);
		height: fit-content;
		margin: 0;
		padding: 0;
		width: fit-content;
	}

	/* 	
	320px — 480px: Mobile devices.
	481px — 768px: iPads, Tablets.
	769px — 1024px: Small screens, laptops.
	1025px — 1200px: Desktops, large screens.
	1201px
	*/

`
