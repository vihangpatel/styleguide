import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'kilvin'

import Icon from 'design-framework/common/ui/Icon'
import CloseIcon from 'design-framework/common/icons/close-cross.svg'

import {
	Overlay,
	Header,
	IconWrapper,
	Content,
	Footer,
	Container,
	Button,
	__moveUp,
	__moveDown,
	__fadeIn,
	__fadeOut,
} from './__style'

const Buttons = ({ buttons = [] }) =>
	buttons.map(btn => (
		<Button key={btn.text} onClick={btn.action}>
			{btn.text}
		</Button>
	))

// @flow
type Props = {
	show?: boolean,
	config: {
		title: string,
		content: string,
		closeAction: Function,
		verticalPosition: 'top' | 'middle' | 'bottom',
		margin: number,
		buttons: Array<{
			text: string,
			action: Function,
		}>,
	},
}

/** Change show prop to see the popup */
const Popup = (props: Props, { renderer }) => {
	if (!props.config) return null
	const {
		title,
		content,
		closeAction,
		verticalPosition,
		margin,
		buttons,
	} = props.config

	const moveUp = renderer.renderRule(__moveUp, { verticalPosition })
	const fadeIn = renderer.renderRule(__fadeIn)
	const fadeOut = renderer.renderRule(__fadeOut)
	const moveDown = renderer.renderRule(__moveDown, {
		verticalPosition,
	})

	return (
		<Box>
			<Overlay className={props.show ? fadeIn : fadeOut} />
			<Container
				className={props.show ? moveUp : moveDown}
				verticalPosition={verticalPosition}
				popupMargin={margin}
			>
				<Header>
					<IconWrapper onClick={closeAction}>
						<Icon glyph={CloseIcon} />
					</IconWrapper>
					<p>{title}</p>
				</Header>
				<Content>{content}</Content>
				<Footer>
					<Buttons buttons={buttons} />
				</Footer>
			</Container>
		</Box>
	)
}

Popup.defaultProps = {
	show: true,
}

Popup.contextTypes = {
	renderer: PropTypes.object,
}

export default Popup
