import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'kilvin'
import { createComponent } from 'react-fela'
import { padding } from 'polished'
import { hrefHandler } from '../../utils/helpers'

const __tab = props => ({
	...padding(0, 10),
	...props.theme.regularBaseFont,
	width: 'auto',
	fontSize: props.theme.fontSize.m,
	lineHeight: props.lineHeight || 2,
	textAlign: 'center',
	cursor: 'pointer',
	userSelect: 'none',
	flex: props.fullWidth ? '1' : '',
	color: props.theme.colorGrayBorder,
	boxShadow: props.shadow ? '0px 10px lightgrey' : 'none',
	zIndex: props.shadow ? props.theme.zIndex.level3 : '',
	extend: {
		condition: props.active === true,
		style: {
			borderBottomWidth: 2,
			borderBottomStyle: 'solid',
			borderBottomColor:
				props.borderBottomColor || props.theme.color.seaGreen,
		},
	},
})

const Tab = createComponent(__tab)

/**
 * Tabbed bar that helps in navigation within a sub component.
 *
 */
const TabbedBar = ({ tabsList, fullWidth, lineHeight, shadow }) => (
	<Box
		row
		center
		justifyContent="space-between"
		style={{ backgroundColor: '#fff' }}
	>
		{tabsList.map((tab, index) => (
			<Tab
				onClick={hrefHandler(tab.href)}
				passThrough={['onClick']}
				active={tab.active}
				key={tab.label}
				fullWidth={fullWidth}
				lineHeight={lineHeight}
				shadow={shadow}
			>
				{tab.label}
			</Tab>
		))}
	</Box>
)

TabbedBar.propTypes = {
	/** Array of objects that describes the label, if active flag and href callback. */
	tabsList: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			active: PropTypes.bool,
			href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
		})
	),
}
TabbedBar.defaultProps = {
	tabsList: [],
}

export default TabbedBar
