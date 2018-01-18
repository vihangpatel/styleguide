import React from 'react'
import { createComponent } from 'react-fela'
import { counterContainer, counterCount, __SvgSize } from './__style'
import PropTypes from 'prop-types'
import Icon from '../../common/ui/Icon'
import counterDecrease from '../../common/icons/minus.svg'
import counterIncrease from '../../common/icons/plus.svg'
import counterIncreaseGrey from '../../common/icons/plus-grey.svg'

const CounterContainer = createComponent(counterContainer)
const CounterCount = createComponent(counterCount)
const SvgSize = createComponent(__SvgSize, 'div', ['onClick'])

export default class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter: 0,
		}
		this.handleCounterIncrease = this.handleCounterIncrease.bind(this)
		this.handleCounterDecrease = this.handleCounterDecrease.bind(this)
	}

	componentWillMount() {
		if (this.props.activeCounter) {
			this.setState({ counter: this.props.activeCounter })
		} else {
			this.setState({ counter: this.props.min })
		}
	}

	componentWillReceiveProps(nextprops) {
		this.setState({ counter: nextprops.activeCounter })
	}

	handleCounterIncrease() {
		let { counter } = this.state
		const { max } = this.props
		if (counter + 1 <= max) {
			counter += 1
			this.setState({ counter }, () => {
				this.props.incrementCounterFunc({ counter })
			})
		} else {
			this.props.maxHitFunc()
		}
	}

	handleCounterDecrease() {
		let { counter } = this.state
		const { min } = this.props
		if (counter - 1 >= min) {
			counter -= 1
			this.setState({ counter }, () => {
				this.props.decrementCounterFunc({ counter })
			})
		} else {
			this.props.minHitFunc()
			this.props.clearCounterFunc()
		}
	}

	format() {
		if (this.props.format) {
			return this.props.format(this.state.counter)
		}

		return this.state.counter
	}
	render() {
		return (
			<CounterContainer
				key={this.props.uniqueIdentifier}
				hide={this.props.hide}
			>
				<SvgSize onClick={this.handleCounterDecrease}>
					<Icon glyph={counterDecrease} />
				</SvgSize>
				<CounterCount>{this.format()}</CounterCount>
				<SvgSize onClick={this.handleCounterIncrease}>
					<Icon
						glyph={
							this.state.counter >= this.props.max
								? counterIncreaseGrey
								: counterIncrease
						}
					/>
				</SvgSize>
			</CounterContainer>
		)
	}
}

Counter.defaultProps = {
	maxHitFunc: () => console.log('maxHitFunc'),
	minHitFunc: () => console.log('minHitFunc'),
	incrementCounterFunc: () => console.log('incrementCounterFunc'),
	decrementCounterFunc: () => console.log('decrementCounterFunc'),
}

Counter.propTypes = {
	/** The hook to call the function when max value is hit */
	maxHitFunc: PropTypes.func,
	/** The hook to call the function when min value is hit */
	minHitFunc: PropTypes.func,
	/** The Max value of counter */
	max: PropTypes.number,
	/** The Min value of counter */
	min: PropTypes.number,
	/** Hide to hide the component */
	hide: PropTypes.string,
	/** The hook to call the function when increment counter is hit */
	incrementCounterFunc: PropTypes.func,
	/** The hook to call the function when decrement counter is hit */
	decrementCounterFunc: PropTypes.func,
	/** The hook to call the function to clear the counter val for the uniqueIdentifier */
	clearCounterFunc: PropTypes.func,
	/** Formatting the counter text */
	format: PropTypes.func,
}
