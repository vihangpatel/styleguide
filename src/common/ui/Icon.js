import React from 'react'
import { createComponentWithProxy } from 'react-fela'

const Icon = createComponentWithProxy(
	props => ({
		color: props.color ? props.color : 'inherit',
		fill: 'currentColor',
		width: 'inherit',
		height: 'inherit',
		extend: {
			condition: props.shadow,
			style: {
				filter: 'drop-shadow(2px 1px 4px #000)',
			},
		},
	}),
	'svg'
)

export default ({ glyph, children, ...props }) => (
	<Icon viewBox={`${glyph.viewBox}`} {...props}>
		<use xlinkHref={`#${glyph.id}`} />
	</Icon>
)
