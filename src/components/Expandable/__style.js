import { createComponent } from 'react-fela'
import {
	margin,
	padding,
	borderColor,
	borderStyle,
	borderWidth,
} from 'polished'

const __header = ({ isExpanded, theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	alignItems: 'center',
	...theme.mediumBaseFont,
	'> div': {
		flexGrow: '1',
	},
	'> svg': {
		background: 'transparent',
		width: '15',
		height: '15',
		...margin('0', '10'),
		transform: `${isExpanded ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}`,
		transition: '0.7s transform',
	},
})

const __content = ({ isExpanded, theme }) => ({
	width: '100%',
	overflow: 'hidden',
	maxHeight: `${isExpanded ? '5000' : '0'}`,
	transition: '0.5s max-height',
	...theme.regularBaseFont,
})

const __container = ({ showBorder }) => ({
	...borderWidth('0', '0', `${showBorder ? '1' : '0'}`, '0'),
	...borderColor('transparent', 'transparent', '#ececec', 'transparent'),
	...borderStyle('none', 'none', 'solid', 'none'),
	...padding('25', '0', '15'),
})

const Header = createComponent(__header, 'div', ['onClick'])
const Content = createComponent(__content)
const Container = createComponent(__container)

export { Header, Content, Container }
