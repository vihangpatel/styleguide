// @flow

import React from 'react'
import { createComponent } from 'react-fela'
import { Box } from 'kilvin'
import { hrefHandler } from '../../utils/helpers'

import Icon from '../../common/ui/Icon'
import Error404 from '../../common/icons/404error.svg'
import Error500 from '../../common/icons/500error.svg'
import PropTypes from 'prop-types'
import {
	__errorPages,
	__errorType,
	__errorMessage,
	__homeLink,
	__errorPageWrapper,
} from './__style'

const ErrorPages = createComponent(__errorPages)
const ErrorCode = createComponent(__errorType)
const ErrorMessage = createComponent(__errorMessage)
const HomeLink = createComponent(__homeLink)
const ErrorPageWrapper = createComponent(__errorPageWrapper)

type Props = {
	homelink: string,
}

const ErrorPage = (props: Props) => {
	let icon = null
	let errorCode = ''
	let errorMessage = ''
	let redirectUrl = ''
	let redirectUrltext = ''

	switch (props.errorType) {
		case 404:
			icon = Error404
			errorCode = 404
			errorMessage = 'Ooops! You spilled it again...'
			redirectUrl = props.homelink
			redirectUrltext = 'go back home'
			break
		case 500:
			icon = Error500
			errorCode = 500
			errorMessage = 'Uh, oh Something broke again...'
			redirectUrl = props.homelink
			redirectUrltext = 'go back home'
			break
		default:
			icon = Error500
			errorCode = ''
			errorMessage = 'Network Error'
			redirectUrl =
				typeof window !== 'undefined' ? window.location.href : '/'
			redirectUrltext = 'Try Again'
			break
	}

	return (
		<ErrorPageWrapper>
			<ErrorPages>
				{icon && <Icon glyph={icon} />}
				<Box grow>
					<ErrorCode>{errorCode && errorCode}</ErrorCode>
					<ErrorMessage>{errorMessage && errorMessage}</ErrorMessage>
				</Box>
				<HomeLink
					onClick={hrefHandler(redirectUrl)}
					passThrough={['onClick']}
				>
					{redirectUrltext}
				</HomeLink>
			</ErrorPages>
		</ErrorPageWrapper>
	)
}

ErrorPage.defaultProps = {
	errorType: 0,
}

ErrorPage.propTypes = {
	/** Error Type 404,500 etc */
	errorType: PropTypes.number,
}

export default ErrorPage
