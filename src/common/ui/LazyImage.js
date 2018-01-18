import React from 'react'
import PropTypes from 'prop-types'
import Visibl from 'visibl'
import { createComponent } from 'react-fela'
import { defaultPlaceHolderCard, cdnUrl } from '../config'

const __keyframe = () => ({
	'0%': {
		transform: 'scale(1.01)',
		opacity: '0',
	},
	'100%': {
		transform: 'scale(1)',
		opacity: '1',
	},
})

const __image = props => ({
	display: 'block',
	width: '100%',
	height: '100%',
	margin: '0 auto',
	border: '0 none',
	extend: [
		{
			condition: props.preview === true,
			style: {
				filter: 'blur(1px)',
				transform: 'scale(1.05)',
			},
		},
		{
			condition: props.preview === false,
			style: {
				left: '0',
				top: '0',
				width: '100%',
				willChange: 'transform, opacity',
				animationName: `${props.keyframeIn}`,
				animationDuration: '1s',
				animationTimingFunction: 'ease-out',
				animationDelay: 'initial',
			},
		},
	],
})

const defaultPlaceHolder = `${cdnUrl}/webin/test-m6/default-src.jpg`

const BaseImage = createComponent(__image, 'img', ['src', 'onClick', 'alt'])

const LazyImage = ({ src, tinySrc, srcErr, alt, onClick }) => (
	<Visibl threshold={2}>
		<Img {...{ src, tinySrc, srcErr, alt, onClick }} />
	</Visibl>
)

class Img extends React.PureComponent {
	constructor(props) {
		super(props)
		this.initializeImage = this.initializeImage.bind(this)

		this.state = {
			src: props.tinySrc || defaultPlaceHolder,
			imageRendered: false,
			alt: `placeholder-${props.alt}`,
			keyframeIn: '',
		}

		this.img = null
	}

	componentDidMount() {
		// initial checkup with on componentDidMount. If it were visible, already would receive the state.
		this.initializeImage(this.props)
	}

	componentWillReceiveProps(nextProps) {
		if (
			nextProps.visible ||
			nextProps.src !== this.props.src ||
			nextProps.alt !== this.props.alt ||
			nextProps.tinySrc !== this.props.tinySrc
		) {
			// looks like the values are different. Now re-render based on new props.
			const isVisible = nextProps.visible
			const wasLoadedPreviously = this.state.imageRendered
			const isSameAsLoaded =
				this.state.src === nextProps.src ||
				this.state.src === nextProps.srcErr
			if (isVisible && !wasLoadedPreviously) {
				// first time it became visible. Load it a fresh.
				this.initializeImage(nextProps)
			} else if (isVisible && wasLoadedPreviously && !isSameAsLoaded) {
				// This was already loaded. Now reset and reload.
				this.setState(
					{
						src: nextProps.tinySrc || defaultPlaceHolder,
						imageRendered: false,
						alt: `placeholder-${nextProps.alt}`,
						keyframeIn: '',
					},
					() => this.initializeImage(nextProps)
				)
			}
		}
	}
	componentWillUnmount() {
		this.img = null
	}
	initializeImage({ src, alt, srcErr, visible }) {
		if (!visible) {
			return
		}
		const { renderer } = this.context
		this.img = document.createElement('img')
		// when image loads, push actual URL to state
		this.img.onload = () => {
			if (this.img)
				this.setState({
					src,
					keyframeIn: renderer.renderKeyframe(__keyframe),
					alt,
					imageRendered: true,
				})
		}
		this.img.onerror = () => {
			if (this.img)
				this.setState({
					src: srcErr || defaultPlaceHolderCard,
					keyframeIn: renderer.renderKeyframe(__keyframe),
					alt,
					imageRendered: true,
				})
		}
		this.img.src = src || ''
	}
	render() {
		return (
			<BaseImage
				onClick={this.props.onClick}
				keyframeIn={this.state.keyframeIn}
				preview={!this.state.imageRendered}
				src={this.state.src}
				alt={`${this.state.alt}`}
			/>
		)
	}
}
Img.contextTypes = {
	renderer: PropTypes.object,
}

export default LazyImage
