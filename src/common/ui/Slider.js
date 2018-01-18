import PropTypes from 'prop-types'
import React, { Children, Component } from 'react'
import { getTabbable } from '../../utils/helpers'
import { createComponent } from 'react-fela'

import { __container, __stage, __track, __slide } from './__slider'

const Container = createComponent(__container)
const Stage = createComponent(__stage)

const defaultSettings = {
	drag: true,
	swipe: true,
	arrows: false,
	dots: false,
	autoplay: true,
	autoplaySpeed: 3000,
	pauseOnHover: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	speed: 500,
}

function getActiveSlides(currentSlide, slidesToShow) {
	return [...Array(slidesToShow)]
		.fill()
		.map((_, index) => currentSlide + index)
}

function getAccessible(elements = []) {
	return Array.prototype.slice
		.call(elements)
		.map(element => getTabbable(element))
		.map(slide =>
			slide.map(element => ({
				element,
				tabIndex: element.getAttribute('tabIndex'),
			}))
		)
}

function getIntervals(slideCount, slidesToScroll, slidesToShow) {
	const intervalCount =
		1 + Math.ceil((slideCount - slidesToShow) / slidesToScroll)
	// Fixed bug where you can't blindly iterate over array anymore. Need to .fill() first.

	return [...Array(intervalCount)].fill().map((_, index) => {
		const interval = index * slidesToScroll + 1
		const lastVisibleSlide = interval + slidesToShow - 1

		return lastVisibleSlide > slideCount
			? interval - (lastVisibleSlide - slideCount)
			: interval
	})
}

function constructInitialState(props) {
	const { children, ...userSettings } = props
	const settings = { ...defaultSettings, ...userSettings }
	const childrenArray = Children.toArray(children)
	const slideCount = childrenArray.length
	const intervals = getIntervals(
		slideCount,
		settings.slidesToScroll,
		settings.slidesToShow
	)

	return {
		settings,
		slideCount,
		dragging: false,
		dragStartX: 0,
		draggedX: 0,
		currentOffset: 0,
		currentSlide: 1,
		currentInterval: 0,
		accessible: [],
		intervals,
	}
}

class ReactStage extends Component {
	constructor(props) {
		super(props)
		this.state = constructInitialState(props)
		this.flushTabIndex = this.flushTabIndex.bind(this)
		this.resetTabIndex = this.resetTabIndex.bind(this)
		this.pauseAutoplay = this.pauseAutoplay.bind(this)
		this.resumeAutoplay = this.resumeAutoplay.bind(this)
		this.resetAutoplay = this.resetAutoplay.bind(this)
		this.transitionPrev = this.transitionPrev.bind(this)
		this.transitionNext = this.transitionNext.bind(this)
		this.transitionTo = this.transitionTo.bind(this)
		this.handleMouseEnter = this.handleMouseEnter.bind(this)
		this.handleMouseOut = this.handleMouseOut.bind(this)
		this.handleTrackMouseDown = this.handleTrackMouseDown.bind(this)
		this.handleTrackMouseMove = this.handleTrackMouseMove.bind(this)
		this.handleTrackMouseUp = this.handleTrackMouseUp.bind(this)
		this.handleTrackTouchStart = this.handleTrackTouchStart.bind(this)
		this.handleTrackTouchMove = this.handleTrackTouchMove.bind(this)
		this.handleTrackTouchEnd = this.handleTrackTouchEnd.bind(this)
		this.handleTrackRef = this.handleTrackRef.bind(this)
	}

	componentDidMount() {
		// eslint-disable-next-line
		this.setState(
			{ accessible: getAccessible(this.track.children) },
			() => {
				this.resetAutoplay()
				this.resetTabIndex()
			}
		)
	}

	componentWillReceiveProps(nextProps) {
		this.flushTabIndex()
		this.setState(
			{
				...constructInitialState(nextProps),
				accessible: getAccessible(this.track.children),
			},
			() => {
				this.resetAutoplay()
				this.resetTabIndex()
			}
		)
	}

	componentWillUnmount() {
		clearTimeout(this.timeout)
		clearInterval(this.interval)
	}

	flushTabIndex() {
		const { accessible } = this.state
		accessible.forEach(slideElements => {
			// Activate tabIndex on all slides.
			slideElements.forEach(slideElement => {
				slideElement.element.setAttribute(
					'tabIndex',
					slideElement.tabIndex
				)
			})
		})
	}

	resetTabIndex() {
		const { currentSlide, accessible, settings } = this.state
		const activeSlides = getActiveSlides(
			currentSlide,
			settings.slidesToShow
		)
		accessible.forEach((slideElements, index) => {
			const thisSlide = index + 1
			if (activeSlides.indexOf(thisSlide) > -1) {
				// Activate tabbable elements in active slides.
				slideElements.forEach(slideElement => {
					slideElement.element.setAttribute(
						'tabIndex',
						slideElement.tabIndex
					)
				})
			} else {
				// Deactivate tabbable elements in inactive slides.
				slideElements.forEach(slideElement => {
					slideElement.element.setAttribute('tabIndex', -1)
				})
			}
		})
	}

	pauseAutoplay() {
		clearInterval(this.interval)
		this.interval = undefined
	}

	resumeAutoplay() {
		if (!this.interval) this.resetAutoplay()
	}

	resetAutoplay() {
		clearTimeout(this.timeout)
		clearInterval(this.interval)
		const { autoplay, autoplaySpeed, speed } = this.state.settings
		if (autoplay) {
			this.timeout = setTimeout(() => {
				this.interval = setInterval(
					() => this.transitionNext(),
					autoplaySpeed
				)
			}, speed)
		}
	}

	transitionPrev() {
		const { currentInterval, intervals } = this.state
		let prevInterval = currentInterval - 1
		if (prevInterval < 0) prevInterval = intervals.length - 1
		this.transitionTo(prevInterval)
	}

	transitionNext() {
		const { currentInterval, intervals } = this.state
		let nextInterval = currentInterval + 1
		if (nextInterval >= intervals.length) nextInterval = 0
		this.transitionTo(nextInterval)
	}

	transitionTo(targetInterval) {
		const {
			settings,
			currentOffset,
			currentSlide,
			slideCount,
			intervals,
		} = this.state

		clearInterval(this.interval)

		const targetSlide = intervals[targetInterval]
		const targetReachedBoundsLeft = targetSlide < 1
		const targetReachedBoundsRight =
			targetSlide + settings.slidesToShow > slideCount
		const targetOutOfBoundsLeft = targetSlide + settings.slidesToShow <= 1
		const targetOutOfBoundsRight = targetSlide > slideCount

		let nextSlide = targetSlide
		if (targetOutOfBoundsLeft) {
			nextSlide = slideCount - settings.slidesToShow + 1
		} else if (targetReachedBoundsLeft || targetOutOfBoundsRight) {
			nextSlide = 1
		} else if (targetReachedBoundsRight) {
			nextSlide = slideCount - settings.slidesToShow + 1
		}

		this.setState(
			{
				currentOffset: currentOffset + (nextSlide - currentSlide),
				currentSlide: nextSlide,
				currentInterval: targetInterval,
			},
			() => {
				this.resetAutoplay()
				this.resetTabIndex()
			}
		)
	}

	handleMouseEnter() {
		const { autoplay, pauseOnHover } = this.state.settings
		if (autoplay && pauseOnHover) {
			this.pauseAutoplay()
		}
	}

	handleMouseOut() {
		const { autoplay, pauseOnHover } = this.state.settings
		if (autoplay && pauseOnHover) {
			this.resumeAutoplay()
		}
	}

	handleTrackTouchStart(e) {
		const { swipe = true } = this.props

		// Start swipe if enabled.
		if (swipe) {
			this.pauseAutoplay()
			this.setState({
				dragging: true,
				dragStartX: e.touches[0].clientX,
			})
		}
	}

	handleTrackTouchMove(e) {
		const { swipe } = this.state.settings
		const { dragging = false, dragStartX } = this.state

		// swipe if enabled.
		if (swipe && dragging)
			this.setState({ draggedX: e.touches[0].clientX - dragStartX })
	}

	handleTrackTouchEnd() {
		const { swipe } = this.state.settings
		const { dragging = false, draggedX } = this.state

		// End swipe if enabled.
		if (swipe && dragging) {
			this.resumeAutoplay()
			this.setState({ dragging: false, draggedX: 0 })

			// Transition if crossing threshold.
			if (draggedX > 50) {
				this.transitionPrev()
			} else if (draggedX < -50) {
				this.transitionNext()
			}
		}
	}

	handleTrackMouseDown(e) {
		const { drag } = this.state.settings

		// Start drag if enabled.
		if (drag) {
			this.pauseAutoplay()
			this.setState({
				dragging: true,
				dragStartX: e.clientX,
			})
		}
	}

	handleTrackMouseMove(e) {
		const { drag } = this.state.settings
		const { dragging = false, dragStartX } = this.state

		// Drag if enabled.
		if (drag && dragging)
			this.setState({ draggedX: e.clientX - dragStartX })
	}

	handleTrackMouseUp() {
		const { drag } = this.state.settings
		const { dragging = false, draggedX } = this.state

		// End drag if enabled.
		if (drag && dragging) {
			this.resumeAutoplay()
			this.setState({ dragging: false, draggedX: 0 })

			// Transition if crossing threshold.
			if (draggedX > 50) {
				this.transitionPrev()
			} else if (draggedX < -50) {
				this.transitionNext()
			}
		}
	}

	handleTrackRef(track) {
		this.track = track
	}
	render() {
		const { children } = this.props
		const { renderer } = this.context
		const {
			settings,
			currentOffset,
			dragging,
			draggedX,
			currentSlide,
		} = this.state
		const childrenArray = Children.toArray(children)

		const renderSlides = ({ slideWidth }) =>
			childrenArray.map((slideComponent, index) => {
				const thisSlide = index + 1
				const visibleSlides = getActiveSlides(
					currentSlide,
					settings.slidesToShow
				)
				const isActive = visibleSlides.indexOf(thisSlide) > -1
				const slideClass = renderer.renderRule(__slide, {
					slideWidth,
					active: isActive,
				})

				return (
					<div
						className={slideClass}
						key={thisSlide}
						tabIndex={-1}
						aria-hidden={!isActive}
					>
						{slideComponent}
					</div>
				)
			})
		const slideWidth = __CLIENT__ ? document.body.clientWidth : 375
		const trackWidth = (childrenArray.length + 1) * slideWidth
		const trackClass = renderer.renderRule(__track, {
			trackWidth,
			currentOffset,
			slideWidth,
			draggedX,
			settings,
			dragging,
		})

		return (
			<Container>
				<Stage>
					<div
						role="presentation"
						className={trackClass}
						ref={this.handleTrackRef}
						onMouseEnter={this.handleMouseEnter}
						onMouseOut={this.handleMouseOut}
						onBlur={this.handleMouseOut}
						onMouseDown={this.handleTrackMouseDown}
						onMouseMove={this.handleTrackMouseMove}
						onMouseUp={this.handleTrackMouseUp}
						onTouchStart={this.handleTrackTouchStart}
						onTouchMove={this.handleTrackTouchMove}
						onTouchEnd={this.handleTrackTouchEnd}
					>
						{renderSlides({ slideWidth })}
					</div>
				</Stage>
			</Container>
		)
	}
}
ReactStage.contextTypes = {
	renderer: PropTypes.object,
}
ReactStage.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
	className: PropTypes.string,
	arrowPrev: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	arrowNext: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	drag: PropTypes.bool,
	swipe: PropTypes.bool,
	arrows: PropTypes.bool,
	dots: PropTypes.bool,
	slidesToShow: PropTypes.number,
	slidesToScroll: PropTypes.number,
	speed: PropTypes.number,
	autoplay: PropTypes.bool,
	autoplaySpeed: PropTypes.bool,
}

export default ReactStage
