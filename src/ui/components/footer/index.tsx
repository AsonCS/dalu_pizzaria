import React from 'react'

import * as images from '../../images'
import strings from '../../strings'
import * as Styled from './styled'
import Banner from '../banner'

export default function Footer() {
	return (
		<Styled.Footer>
			<Styled.BannerDiv>
				<Banner />
			</Styled.BannerDiv>
			<Styled.QrCodesDiv>
				<Styled.ImageContainer>
					<img
						src={images.qr_code_instagram}
						alt={strings.social_instagram_alt}
					/>
					<label>{strings.text_instagram}</label>
				</Styled.ImageContainer>
				<Styled.ImageContainer>
					<img
						src={images.qr_code_maps}
						alt={strings.social_maps_alt}
					/>
					<label>
						{strings.text_maps.part1}, {strings.text_maps.part2},{' '}
						{strings.text_maps.part3}
					</label>
				</Styled.ImageContainer>
				<Styled.ImageContainer>
					<img
						src={images.qr_code_site}
						alt={strings.social_internet_alt}
					/>
					<label>{strings.text_internet}</label>
				</Styled.ImageContainer>
				<Styled.ImageContainer>
					<img
						src={images.qr_code_whatsapp}
						alt={strings.social_whatsapp_alt}
					/>
					<label>{strings.text_whatsapp}</label>
				</Styled.ImageContainer>
			</Styled.QrCodesDiv>
		</Styled.Footer>
	)
}
