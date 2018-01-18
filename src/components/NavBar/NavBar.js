import React from 'react'
import PropTypes from 'prop-types'
import { createComponent, withTheme } from 'react-fela'
import { Box } from 'kilvin'
import Icon from '../../common/ui/Icon'
import BackSvg from '../../common/icons/titlebar-back.svg'
import { hrefHandler } from '../../utils/helpers'
import {
	__outerBox,
	__tab,
	__title,
	__backIcon,
	__buttonRight,
} from './__style'
import Button from '../Button'

const OuterBox = createComponent(__outerBox)
const Tab = createComponent(__tab)
const Title = createComponent(__title)
const BackIcon = createComponent(__backIcon)
const ButtonRight = createComponent(__buttonRight)

const __box = props => ({
	minHeight: 43,
	width: '100%',
	position: `${props.fixed ? 'fixed' : 'relative'}`,
	backgroundColor: props.title
		? props.theme.colorWhite
		: props.theme.colorPurpleApp,
	boxShadow: props.noShadow ? 'none' : props.theme.boxShadow.thin,
	zIndex: props.theme.zIndex.level3,
	extend: [
		{
			condition: props.transparent,
			style: {
				backgroundColor: props.theme.colorTransparent,
				boxShadow: 'unset',
			},
		},
		{
			condition: props.leftPadding,
			style: {
				paddingLeft: 5,
			},
		},
	],
})

// if not wrapped in a stateless component, the export is not found.
// Probably issue with styleguidist or fela.
const NavBar = (
	{
		theme,
		listArray,
		title,
		href,
		fixed,
		buttonProps,
		transparent,
		noBack,
		abs,
		noShadow,
		titleAlignLeft,
	},
	{ renderer }
) => {
	const BoxClass = renderer.renderRule(__box, {
		noShadow,
		fixed,
		theme,
		transparent,
		title,
		leftPadding: listArray && listArray.length > 0,
	})

	return (
		<OuterBox fixed={fixed} abs={abs} transparent={transparent}>
			<Box
				row
				center={!!title}
				className={BoxClass}
				justifyContent={titleAlignLeft ? 'flex-start' : 'center'}
			>
				{!noBack && (
					<BackIcon
						transparent={transparent}
						passThrough={['onClick']}
						onClick={hrefHandler(href)}
					>
						<Icon
							color={transparent ? '#fff' : '#333'}
							glyph={BackSvg}
							shadow={!!transparent}
						/>
					</BackIcon>
				)}
				{title && (
					<Title
						buttonProps={buttonProps}
						titleAlignLeft={titleAlignLeft}
					>
						{title}
					</Title>
				)}
				{!title &&
					listArray.map((list, key) => (
						<Tab
							onClick={hrefHandler(list.href)}
							key={list.title}
							isActive={list.isActive}
							passThrough={['onClick']}
						>
							{list.title}
						</Tab>
					))}
				{buttonProps && (
					<ButtonRight>
						<Button {...buttonProps} />
					</ButtonRight>
				)}
			</Box>
		</OuterBox>
	)
}

NavBar.contextTypes = {
	renderer: PropTypes.object,
}

NavBar.propTypes = {
	/** Sets the list of values to render up */
	listArray: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			isActive: PropTypes.bool,
			href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		})
	),
	/** Sets the title. If set, then nav tabs won't be shown. */
	title: PropTypes.string,
	/** Align title to the left */
	titleAlignLeft: PropTypes.bool,
	/** main back handler action binding. */
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	/** Make bar transparent */
	transparent: PropTypes.bool,
	/** Fix to top of screen */
	fixed: PropTypes.bool,
	/** Props for the button on the right. */
	buttonProps: PropTypes.object,
	/** No back button */
	noBack: PropTypes.bool,
	/** Remove shadow */
	noShadow: PropTypes.bool,
}

NavBar.defaultProps = {
	listArray: [],
	transparent: false,
	fixed: false,
	titleAlignLeft: false,
}

export default withTheme(NavBar)
