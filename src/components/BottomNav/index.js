import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'kilvin'
import { createComponent, withTheme } from 'react-fela'
import Icon from '../../common/ui/Icon'
import HomeIcon from '../../common/icons/nav-home.svg'
import SearchIcon from '../../common/icons/nav-search.svg'
import MenuIcon from '../../common/icons/nav-menu.svg'
import { hrefHandler } from '../../utils/helpers'

const __NavWrap = props => ({
	position: props.fixed ? 'fixed' : 'relative',
	bottom: '0',
	left: '0',
	width: '100%',
	boxShadow: props.theme.boxShadow.thin,
	backgroundColor: props.theme.colorWhite,
	height: '40',
	zIndex: props.theme.zIndex.level2,
})
const __IconWrap = props => ({
	height: '16',
	width: '16',
	marginTop: -5,
	color: `${props.active ? props.theme.colorBlue : props.theme.colorGray}`,
})
const IconWrap = createComponent(__IconWrap)

const IconMap = {
	home: HomeIcon,
	search: SearchIcon,
	menu: MenuIcon,
}
const BottomNav = (props, context) => {
	const { renderer } = context
	const { activeKey, fixed, href, theme } = props
	const wrapClass = renderer.renderRule(__NavWrap, { theme, fixed })

	return (
		<Box center row className={wrapClass}>
			{Object.keys(IconMap).map(key => (
				<Box key={key} grow center>
					<IconWrap
						key={key}
						active={key === activeKey}
						onClick={hrefHandler(href[key])}
						passThrough={['onClick']}
					>
						<Icon glyph={IconMap[key]} />
					</IconWrap>
				</Box>
			))}
		</Box>
	)
}
BottomNav.contextTypes = {
	renderer: PropTypes.object,
}
BottomNav.defaultProps = {
	activeKey: 'home',
	fixed: false,
	href: { home: 'https://in.bookmyshow.com' },
}
BottomNav.propTypes = {
	/** Set the active key. Default bottom nav keys - home, search, plan, menu */
	activeKey: PropTypes.string,
	/** Whether to fix onto the bottom of viewport */
	fixed: PropTypes.bool,
	/** Objet of href's corresponding to the element keys */
	href: PropTypes.object,
}

export default withTheme(BottomNav)
