import React from 'react'

import * as Styled from './styled'
import strings from '../../strings'

export default function Header() {
	return (
		<Styled.HeaderContainer>
			<Styled.HeaderContainerDiv>
				<Styled.LogoImage>
					<img
						alt={strings.logo_alt}
						src='images/dalu-pizzaria.png'
					/>
				</Styled.LogoImage>
				<Styled.SocialDiv>
					<Styled.SocialContainer
						href='https://www.instagram.com/dalupizzariajandira/'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_instagram_alt}
								src='images/social_instagram.svg'
							/>
							<label>@dalupizzariajandira</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://wa.me/551128789425'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_whatsapp_alt}
								src='images/social_whatsapp.svg'
							/>
							<label>2878-9425</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://goo.gl/maps/YfqSt3QqrkHWzNbdA'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_whatsapp_alt}
								src='images/social_maps.svg'
							/>
							<div>
								<label>R. Itapiranga, 72</label>
								<label>
									Jardim Nossa Sra. de Fatima, Jandira
								</label>
								<label>SP, 06624-170</label>
							</div>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.HeaderLabel>
						🔥🪵 Forno a Lenha🪵🔥
					</Styled.HeaderLabel>
				</Styled.SocialDiv>
			</Styled.HeaderContainerDiv>
		</Styled.HeaderContainer>
	)
}
