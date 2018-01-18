import { createComponent } from 'react-fela'
import { margin } from 'polished'

const __widget = ({
	isEnabled,
	isChecked,
	size,
	filledColor,
	unfilledColor,
	...props
}) => ({
	width: `${size}`,
	height: `${size}`,
	position: 'relative',
	display: 'flex',
	'> svg': {
		// eslint-disable-next-line
		fill: `${isEnabled
			? isChecked ? filledColor : unfilledColor
			: props.theme.disabledInputColor}`,
	},
	'& > input': {
		width: '100%',
		height: '100%',
		position: 'absolute',
		margin: '0',
		top: '50%',
		left: '0',
		transform: 'translateY(-50%)',
		opacity: '0',
		cursor: `${isEnabled ? 'pointer' : 'default'}`,
	},
	'& > p': {
		paddingLeft: '5px',
	},
})

const __label = ({ theme }) => ({
	...margin('0', '0', '0', '15'),
	...theme.mediumBaseFont,
	cursor: 'pointer',
	userSelect: 'none',
})

const Label = createComponent(__label, 'p', ['onClick'])

const Widget = createComponent(__widget)

export { Widget, Label }
