import React from 'react'
import ReactDOM from 'react-dom'

import {
	convertFromPercentage,
	convertToPercentage,
	addEventListeners,
	removeEventListeners,
} from '../utils/index'
import { Container, Line, Handle, MinMax } from '../__style'

class Picker extends React.Component {
	constructor(props) {
		super(props)

		/** Convert initial values to percentages for CSS. */
		this.state = {
			dragging: [false, false],
			currentValues: [
				convertToPercentage(
					props.initialValues[0],
					props.minValue,
					props.maxValue
				),
				convertToPercentage(
					props.initialValues[1],
					props.minValue,
					props.maxValue
				),
			],
		}

		/** If snap is enabled use number of divisions to calculate snap otherwise assume 100 divisions */
		this.snapTo = props.snapToNearestDivision ? props.numOfDivisions : 100
		this.handleMouseDown = this.handleMouseDown.bind(this)
		this.handleMouseMove = this.handleMouseMove.bind(this)
		this.handleMouseUp = this.handleMouseUp.bind(this)
		this.snap = this.snap.bind(this)
		this.rect = null
		this.activeHandle = null
	}
	componentWillReceiveProps(props) {
		this.setState({
			dragging: [false, false],
			currentValues: [
				convertToPercentage(
					props.initialValues[0],
					props.minValue,
					props.maxValue
				),
				convertToPercentage(
					props.initialValues[1],
					props.minValue,
					props.maxValue
				),
			],
		})
	}
	snap(value) {
		/** Calculated snap. */
		const moveTo =
			Math.round(value / (100 / this.snapTo)) * (100 / this.snapTo)

		if (this.activeHandle === '0') {
			/** Difference between handles if current handle is moved to moveTo. */
			const currDiff = this.state.currentValues[1] - moveTo
			const moveOtherHandleTo =
				this.state.currentValues[1] + (10 - currDiff)

			if (currDiff < 10 && moveOtherHandleTo <= 100) {
				/** Difference is less than 10% but the second handle can be moved right to compensate. */
				return [moveTo, moveOtherHandleTo]
			} else if (currDiff < 10 && moveOtherHandleTo > 100) {
				/** Difference is less than 10% and no room to move second handle to compensate. So move as much as possible. */
				return [
					this.state.currentValues[0] +
						(100 - this.state.currentValues[1]),
					100,
				]
			}

			/** Difference is greater than 10%. Second handle need not be moved. */
			return [moveTo, this.state.currentValues[1]]
		} else if (this.activeHandle === '1') {
			/** Difference between handles if current handle is moved to moveTo. */
			const currDiff = moveTo - this.state.currentValues[0]
			const moveOtherHandleTo =
				this.state.currentValues[0] - (10 - currDiff)

			if (currDiff < 10 && moveOtherHandleTo >= 0) {
				/** Difference is less than 10% but the first handle can be moved left to compensate. */
				return [moveOtherHandleTo, moveTo]
			} else if (currDiff < 10 && moveOtherHandleTo < 0) {
				/** Difference is less than 10% and no room to move first handle to compensate. So move as much as possible. */
				return [
					0,
					this.state.currentValues[1] - this.state.currentValues[0],
				]
			}

			/** Difference is greater than 10%. First handle need not be moved. */
			return [this.state.currentValues[0], moveTo]
		}
	}
	handleMouseMove(e) {
		/** Touch events provide X and Y in e.changedTouches whereas mouse events provide them in e.pageX and e.pageY */
		const x =
			e.pageX ||
			(e.changedTouches &&
				e.changedTouches[0] &&
				e.changedTouches[0].pageX)

		if (!this.rect)
			// TODO: Shriharsha
			// eslint-disable-next-line react/no-find-dom-node
			this.rect = ReactDOM.findDOMNode(this).getBoundingClientRect()

		/** TODO: See if this condition can be removed. */
		if (this.state.dragging && x > this.rect.left && x < this.rect.right) {
			this.setState({
				/** Percentage to use in CSS to move the handle. */
				currentValues: this.snap(
					convertToPercentage(x, this.rect.left, this.rect.right)
				),
			})
		}
	}

	handleMouseDown(e) {
		this.activeHandle = e.target.getAttribute('data-id')
		this.setState({
			dragging: [this.activeHandle === '0', this.activeHandle === '1'],
		})

		/** Add listeners to document to detect drag movement and stop (Add as soon as user clicks and remove as soon as user lets go). */
		addEventListeners(this.handleMouseUp, this.handleMouseMove)
	}
	handleMouseUp() {
		this.setState({
			dragging: [false, false],
		})

		/** Call the callback received with user's input */
		const input = [
			convertFromPercentage(
				this.state.currentValues[0],
				this.props.minValue,
				this.props.maxValue
			),
			convertFromPercentage(
				this.state.currentValues[1],
				this.props.minValue,
				this.props.maxValue
			),
		]
		if (typeof this.props.onChange === 'function')
			this.props.onChange(input)

		/** Remove listeners from document. */
		removeEventListeners(this.handleMouseUp, this.handleMouseMove)
	}
	render() {
		const {
			thickness,
			unfilledColor,
			filledColor,
			minValue,
			maxValue,
		} = this.props
		const fillWidth =
			this.state.currentValues[1] - this.state.currentValues[0]
		const fillStart = this.state.currentValues[0]
		const fillEnd = this.state.currentValues[1]

		const input = [
			convertFromPercentage(
				fillStart,
				minValue,
				maxValue,
				0
			).toLocaleString(),
			convertFromPercentage(
				fillEnd,
				minValue,
				maxValue,
				0
			).toLocaleString(),
		]

		return (
			<Container thickness={thickness}>
				<Line
					fillWidth={100}
					color={unfilledColor}
					thickness={thickness}
				/>
				<Line
					fillWidth={fillWidth}
					fillStart={fillStart}
					color={filledColor}
					thickness={thickness}
				/>
				<Handle
					dragging={this.state.dragging[0]}
					thickness={this.props.thickness}
					position={fillStart}
					onMouseDown={this.handleMouseDown}
					onTouchStart={this.handleMouseDown}
					data-id={0}
				/>
				<Handle
					dragging={this.state.dragging[1]}
					thickness={this.props.thickness}
					position={fillEnd}
					onMouseDown={this.handleMouseDown}
					onTouchStart={this.handleMouseDown}
					data-id={1}
				/>
				<MinMax left position={fillStart} filledColor={filledColor}>
					{input[0] || minValue}
				</MinMax>
				<MinMax position={100 - fillEnd} filledColor={filledColor}>
					{input[1] || maxValue}+
				</MinMax>
			</Container>
		)
	}
}

export default Picker
