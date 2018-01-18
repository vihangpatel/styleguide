// @flow

import React from 'react'
import { createComponent } from 'react-fela'
import { __artist, __artistName, __artistType, __artistImg } from './__style'

import LazyImage from '../../common/ui/LazyImage'
import { eventPreloaderUrl, noArtistImageUrl } from '../../common/config'

const Artist = createComponent(__artist)
const ArtistName = createComponent(__artistName)
const ArtistType = createComponent(__artistType)
const ArtistImage = createComponent(__artistImg)

const Artists = ({ artistImage, artistName, artistType }) => (
	<div>
		<Artist>
			<ArtistImage>
				<LazyImage
					src={artistImage}
					srcErr={noArtistImageUrl}
					tinySrc={eventPreloaderUrl}
					alt={artistName}
				/>
			</ArtistImage>
			<ArtistName>{artistName}</ArtistName>
			<ArtistType>{artistType}</ArtistType>
		</Artist>
	</div>
)

Artists.defaultProps = {
	title: '',
	banner: '',
	artistName: '',
	artistType: '',
}

export default Artists
