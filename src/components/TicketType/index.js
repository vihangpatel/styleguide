import React from 'react'
import { createComponent } from 'react-fela'
import {
	cardProps,
	title,
	ticketPrice,
	buyButton,
	titleContainer,
} from './__style'
import ReadMore from 'design-framework/components/ReadMore/ReadMore'
import Counter from 'design-framework/components/Counter'
import Style from 'design-framework/utils/base-ui-theme'
import { Spacer } from 'kilvin'
import PropTypes from 'prop-types'

// creating components from styles using fela components
const TicketTypeCard = createComponent(cardProps, 'div', ['onClick'])
const Title = createComponent(title)
const Price = createComponent(ticketPrice)
const BuyButton = createComponent(buyButton, 'div', ['onClick'])
const TitleDiv = createComponent(titleContainer)

export default class TicketType extends React.Component {
	constructor(props) {
		super(props)
		this.handleOnclick = this.handleOnclick.bind(this)
	}
	handleOnclick() {
		if (!this.props.disabled) {
			this.props.togglerFunc()
		}
	}
	render() {
		return (
			<TicketTypeCard key={this.props.uniqueIdentifier}>
				<TitleDiv toggle={this.props.hide}>
					<Title disabled={this.props.disabled}>
						{this.props.title}
					</Title>
					<BuyButton
						onClick={this.handleOnclick}
						disabled={this.props.disabled}
						hide={this.props.hide}
						showAddButton={this.props.showAddButton}
					>
						{this.props.disabled ? 'Sold Out' : 'Add'}
					</BuyButton>
					<Counter
						uniqueIdentifier={this.props.uniqueIdentifier}
						max={this.props.max}
						min={this.props.min}
						hide={this.props.hide}
						maxHitFunc={this.props.maxHitFunc}
						minHitFunc={this.props.minHitFunc}
						incrementCounterFunc={this.props.incrementCounterFunc}
						decrementCounterFunc={this.props.decrementCounterFunc}
						clearCounterFunc={this.props.clearCounterFunc}
						activeCounter={this.props.activeCounter}
					/>
				</TitleDiv>
				<Spacer size={10} />
				{this.props.price && (
					<Price disabled={this.props.disabled}>
						₹{this.props.price}
					</Price>
				)}
				{this.props.synopsisData && (
					<ReadMore
						synopsisData={this.props.synopsisData}
						fontColor={
							this.props.disabled
								? Style.color.silver
								: Style.color.doveGray
						}
					/>
				)}
			</TicketTypeCard>
		)
	}
}

TicketType.defaultProps = {
	disabled: false,
	hide: 'counter',
	maxHitFunc: () => {},
	minHitFunc: () => {},
	togglerFunc: () => {},
}

TicketType.propTypes = {
	/** Unique identifier */
	key: PropTypes.string,
	/** Title to be displayed */
	title: PropTypes.string,
	/** Price to be displayed */
	price: PropTypes.string,
	/** Synopsis Data */
	synopsisData: PropTypes.string,
	/** Disabled for Sold out */
	disabled: PropTypes.bool,
	/** ReadMore font color */
	fontColor: PropTypes.string,
	/** The hook to toggle the value for hide */
	togglerFunc: PropTypes.func,
	/** ReadMore font color */
	hide: PropTypes.string,
	/** Counter max value */
	max: PropTypes.number,
	/** Counter min value */
	min: PropTypes.number,
	/** The hook to call the function when max value is hit for counter */
	maxHitFunc: PropTypes.func,
	/** The hook to call the function when min value is hit for counter */
	minHitFunc: PropTypes.func,
	/** The hook to call the function when increment counter is hit */
	incrementCounterFunc: PropTypes.func,
	/** The hook to call the function when decrement counter is hit */
	decrementCounterFunc: PropTypes.func,
	/** The hook to call the function to clear the counter val for the uniqueIdentifier */
	clearCounterFunc: PropTypes.func,
	/** The active counter */
	activeCounter: PropTypes.number,
}
