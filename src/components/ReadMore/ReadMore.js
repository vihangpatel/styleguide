import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import { __SynopsisDataCard, __ReadMore, __wrapper } from './__style'

const SynopsisDataCard = createComponent(__SynopsisDataCard, 'div', [
	'dangerouslySetInnerHTML',
])
const ReadmoreButton = createComponent(__ReadMore)
const Wrapper = createComponent(__wrapper)

export default class ReadMoreCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isExpandable: false,
			show: false,
		}
		this.toggle = this.toggle.bind(this)
	}
	componentDidMount() {
		if (!this.state.isExpandable && this.synopsisText.offsetHeight > 60)
			this.setState({ isExpandable: true }) // eslint-disable-line react/no-did-mount-set-state
	}
	componentWillReceiveProps() {
		if (!this.state.isExpandable && this.synopsisText.offsetHeight > 60)
			this.setState({ isExpandable: true })
	}
	toggle() {
		if (!this.state.show) {
			this.setState({ show: true })
		} else {
			this.setState({ show: false })
		}
	}
	render() {
		const {
			synopsisData,
			width,
			height,
			backgroundColor,
			fontColor,
		} = this.props

		return (
			<Wrapper>
				<SynopsisDataCard
					show={this.state.show}
					onClick={this.state.isExpandable ? this.toggle : null}
					passThrough={['onClick']}
					width={width}
					height={height}
					backgroundColor={backgroundColor}
					fontColor={fontColor}
				>
					<div
						dangerouslySetInnerHTML={{ __html: synopsisData }}
						ref={domElem => {
							this.synopsisText = domElem
						}}
					/>
				</SynopsisDataCard>
				{this.state.isExpandable && (
					<ReadmoreButton
						backgroundColor={backgroundColor}
						onClick={this.toggle}
						passThrough={['onClick']}
					>
						{this.state.show ? 'Less' : 'More'}
					</ReadmoreButton>
				)}
			</Wrapper>
		)
	}
}

ReadMoreCard.propTypes = {
	/** Optional. Could be set to some value or by default it will be 354px kept string so that it accepts % also */
	width: PropTypes.string,
	/** Optional. Could be set to some value or by default it will be 68px string so that it accepts % also */
	height: PropTypes.string,
	/** Optional. Could be set to some value or by default it will be white */
	backgroundColor: PropTypes.string,
	/** Optional. Could be set to some value or by default it will be 999999 */
	fontColor: PropTypes.string,
	/** Toggle the height of card AND to show More or Less. */
	show: PropTypes.bool,
	/** Callback to call when readmore is toggled. */
	Toggle: PropTypes.func,
	/** Synopsis Data */
	synopsisData: PropTypes.string,
}
