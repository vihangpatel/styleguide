// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import { __listIconWrapper, __title, __ListIcon, __iconName } from './__style'

import Icon from '../../common/ui/Icon'
import Merchandise from '../../common/icons/merchandise.svg'
import Snacks from '../../common/icons/snacks.svg'
import Offers from '../../common/icons/offers.svg'
import Valet from '../../common/icons/valet.svg'

const Title = createComponent(__title)
const ListIconWrapper = createComponent(__listIconWrapper)
const ListIcon = createComponent(__ListIcon)
const IconName = createComponent(__iconName)

type Props = {
	svgIcon: HTMLElement,
	reasontitle: string,
}

const Reasons = {
	'0': {
		svgIcon: Valet,
		reasontitle: 'valet parking',
	},
	'1': {
		svgIcon: Snacks,
		reasontitle: 'Snacks & Drinks',
	},
	'2': {
		svgIcon: Offers,
		reasontitle: 'Amazing Offers',
	},
	'3': {
		svgIcon: Merchandise,
		reasontitle: 'Free Merchandise',
	},
}

const ListIcons = (props: Props) => {
	const ListIconWrap = Object.keys(Reasons).map(key => (
		<ListIcon key={Reasons[key].svgIcon}>
			<Icon glyph={Reasons[key].svgIcon} />
			<IconName>{Reasons[key].reasontitle}</IconName>
		</ListIcon>
	))

	return (
		<div>
			<Title>Reasons To Go</Title>
			<ListIconWrapper>{ListIconWrap}</ListIconWrapper>
		</div>
	)
}

export default ListIcons
