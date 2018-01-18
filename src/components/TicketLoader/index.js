// @flow

import React from 'react'
import PropTypes from 'prop-types'

import { loaderStyles, dotPulse, ticketFlyIn } from './__styles'
import {
	ticketIllustraionUrlUno,
	ticketIllustraionUrlDos,
} from '../../common/config'

/** Acts as a loader that overlays book button. Can be used for page transistions or
 * to signify something as action.
 */
const TicketsLoader = (props, context) => {
	const { renderer } = context
	const dotPulseKeyframes = renderer.renderKeyframe(dotPulse)
	const ticketFlyInKeyframes = renderer.renderKeyframe(ticketFlyIn)
	const FetchingSeatsSection = renderer.renderRule(loaderStyles, {
		dotPulseKeyframes,
		ticketFlyInKeyframes,
	})

	return (
		<div className={FetchingSeatsSection}>
			<div className="illustration">
				<img
					alt="illustration-dos"
					className="illustration-dos"
					src={ticketIllustraionUrlDos}
				/>
				<img
					alt="illustration-uno"
					className="illustration-uno"
					src={ticketIllustraionUrlUno}
				/>
			</div>
			<span className="label">Confirming your seats!</span>
			<div className="loader-dots">
				<div className="dot dot-uno" />
				<div className="dot dot-dos" />
				<div className="dot dot-tres" />
			</div>
		</div>
	)
}

TicketsLoader.contextTypes = {
	renderer: PropTypes.object,
}

export default TicketsLoader
