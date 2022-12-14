import React from 'react'

import * as images from '../../images'
import strings from '../../strings'
import * as Styled from './styled'

export default function Banner() {
	return (
		<Styled.BannerContainer>
			<Styled.BannerContainerDiv>
				<Styled.LogoImage>
					<img alt={strings.logo_alt} src={images.dalu_pizzaria} />
				</Styled.LogoImage>
				<Styled.SocialDiv>
					<Styled.SocialContainer
						href='https://asoncs.github.io/dalu_pizzaria/assets/menu.pdf'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_file_alt}
								src={images.social_file}
							/>
							<label>{strings.text_print}</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://asoncs.github.io/dalu_pizzaria'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_internet_alt}
								src={images.social_internet}
							/>
							<label>{strings.text_internet}</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://www.instagram.com/dalupizzariajandira/'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_instagram_alt}
								src={images.social_instagram}
							/>
							<label>{strings.text_instagram}</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://wa.me/551128789425?text=Olá%20tudo%20bem%0AGostaria%20de%20fazer%20um%20pedido'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_whatsapp_alt}
								src={images.social_whatsapp}
							/>
							<label>{strings.text_whatsapp}</label>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.SocialContainer
						href='https://goo.gl/maps/YfqSt3QqrkHWzNbdA'
						target='_blank'
					>
						<figcaption>
							<img
								alt={strings.social_maps_alt}
								src={images.social_maps}
							/>
							<div>
								<label>{strings.text_maps.part1}</label>
								<label>{strings.text_maps.part2}</label>
								<label>{strings.text_maps.part3}</label>
							</div>
						</figcaption>
					</Styled.SocialContainer>
					<Styled.BannerLabel>
						🔥🪵 Forno a Lenha🪵🔥
					</Styled.BannerLabel>
				</Styled.SocialDiv>
			</Styled.BannerContainerDiv>
		</Styled.BannerContainer>
	)
}
