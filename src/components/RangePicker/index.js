import React from 'react'
import PropTypes from 'prop-types'

import { Info, Division } from './__style'
import Picker from './components/picker'
import { margin } from 'polished'

const Divisions = ({ numOfDivisions }) => {
	const divisions = []

	/** Default to 10 divisions */
	if (numOfDivisions === 0) return null

	for (let i = 0; i <= numOfDivisions; ++i) {
		divisions.push(
			<Division
				highlight={i === 0 || i === numOfDivisions}
				position={i * (100 / numOfDivisions).toFixed(2)}
				key={i}
			/>
		)
	}

	return divisions
}

const validateProps = props => {
	let { numOfDivisions, minValue } = props
	const { maxValue, initialValues } = props

	if (numOfDivisions < 0 || numOfDivisions > 100) numOfDivisions = 10

	if (minValue < 0) minValue = 0

	if (initialValues[0] < minValue || initialValues[0] > maxValue)
		initialValues[0] = minValue

	if (initialValues[1] < minValue || initialValues[1] > maxValue)
		initialValues[1] = maxValue

	return Object.assign({}, props, {
		numOfDivisions,
		minValue,
		maxValue,
		initialValues,
	})
}

/**
 * It can be used as a range picker with two handles.
 */
const RangePicker = props => {
	const validatedProps = validateProps(props)

	return (
		<div
			style={{
				...margin('0', `${(validatedProps.thickness + 10) / 2}px`),
			}}
		>
			<Picker {...validatedProps} />
			<Info>
				<Divisions numOfDivisions={validatedProps.numOfDivisions} />
			</Info>
		</div>
	)
}

RangePicker.propTypes = {
	/** Height of the picker (Max: 8) */
	thickness: PropTypes.number,
	/** Color of the unfilled part of the picker */
	unfilledColor: PropTypes.string,
	/** Color of the filled part of the picker */
	filledColor: PropTypes.string,
	/** Minimum input value */
	minValue: PropTypes.number,
	/** Maximum input value */
	maxValue: PropTypes.number,
	/** Initial value for each handle of the picker */
	initialValues: PropTypes.arrayOf(PropTypes.number),
	/** Number of divisions (Max: 100) */
	numOfDivisions: PropTypes.number,
	/** Snap the handle to divisions while dragging */
	snapToNearestDivision: PropTypes.bool,
	/** Callback called when input is changed */
	onChange: PropTypes.func,
}

RangePicker.defaultProps = {
	thickness: 5,
	unfilledColor: '#D9D9D9',
	filledColor: '#4CD9AA',
	minValue: 0,
	maxValue: 100,
	initialValues: [0, 100],
	numOfDivisions: 10,
	snapToNearestDivision: false,
}

export default RangePicker
