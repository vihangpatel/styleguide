// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { __fadingLoader, __loader } from './__style'

const FadingLoaderWrapper = createComponent(__fadingLoader)
const Loader = createComponent(__loader)

type Props = {
	rotateDeg: string,
	animationDelay: number,
	size?: string,
}

const loaderDetails = {
	'0': {
		rotateAngle: '0',
		animationDelay: '0',
	},
	'1': {
		rotateAngle: '30',
		animationDelay: '-1.1',
	},
	'2': {
		rotateAngle: '60',
		animationDelay: '-1',
	},
	'3': {
		rotateAngle: '90',
		animationDelay: '-0.9',
	},
	'4': {
		rotateAngle: '120',
		animationDelay: '-0.8',
	},
	'5': {
		rotateAngle: '150',
		animationDelay: '-0.7',
	},
	'6': {
		rotateAngle: '180',
		animationDelay: '-0.6',
	},
	'7': {
		rotateAngle: '210',
		animationDelay: '-0.5',
	},
	'8': {
		rotateAngle: '240',
		animationDelay: '-0.4',
	},
	'9': {
		rotateAngle: '270',
		animationDelay: '-0.3',
	},
	'10': {
		rotateAngle: '300',
		animationDelay: '-0.2',
	},
	'11': {
		rotateAngle: '330',
		animationDelay: '-0.1',
	},
}

const SubLoader = (props: Props) => {
	const FadingLoader = Object.keys(loaderDetails).map(key => (
		<Loader
			key={`${loaderDetails[key].rotateAngle}${loaderDetails[key]
				.animationDelay}subloader`}
			rotateDeg={loaderDetails[key].rotateAngle}
			animationDelay={loaderDetails[key].animationDelay}
		/>
	))

	return (
		<FadingLoaderWrapper size={props.size}>
			{FadingLoader}
		</FadingLoaderWrapper>
	)
}

SubLoader.defaultProps = {
	size: '28',
}

export default SubLoader
