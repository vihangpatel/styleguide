import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { hrefHandler } from '../../utils/helpers'

/** Fetching style for the button component */
import { __button } from './__style'
import SubLoader from '../SubLoader/SubLoader'

/** creating elements using react-fela */
const ButtonBase = createComponent(__button, 'button')

const ButtonWrap = props => {
	const ComponentActive = (
		<ButtonBase
			{...props}
			onClick={hrefHandler(props.click)}
			passThrough={['onClick']}
		>
			{props.showLoader ? <SubLoader /> : props.label}
		</ButtonBase>
	)
	const ComponentBlocked = (
		<ButtonBase {...props}>
			{props.showLoader ? <SubLoader /> : props.label}
		</ButtonBase>
	)

	return props.isEnabled ? ComponentActive : ComponentBlocked
}

export default function Button({ ...props }) {
	return <ButtonWrap {...props} />
}

Button.propTypes = {
	/** Different Variants of Button component */
	buttonVariant: PropTypes.string,
	/** Callback to the listing page. It is a function */
	click: PropTypes.func,
	/** Disable or Enable a button */
	isEnabled: PropTypes.bool,
	/** Provide width of the button */
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** Provide height of the button */
	height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** Provide Button label */
	label: PropTypes.string,
	/** Show Loadering Text */
	showLoader: PropTypes.bool,
	/** Show flat theme. Used in Activity Tab switch */
	isFlat: PropTypes.bool,
}
