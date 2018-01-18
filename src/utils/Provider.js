import React, { Children, isValidElement, cloneElement } from 'react'
import PropTypes from 'prop-types'
import createRenderer from './createFelaRenderer'
import createFontRenderer from './createFontRenderer'
import createResetCss from './createResetCss'
import { Provider as FelaProvider, ThemeProvider } from 'react-fela'

// should be from another file. Use this to drive themes.
import defaultTheme from './base-ui-theme'

// Use the below function to customer dev/prod mode plugins
const felaRenderer = createRenderer()

const StyleProvider = props => {
	const { children, theme, renderer, ...otherProps } = props
	const child = Children.only(children)
	// render all the fonts
	createFontRenderer(renderer, theme)
	// render the reset css
	if (
		__STYLEGUIDE__ ||
		__SERVER__ ||
		(window.__CLIENT_CONFIG__ && window.__CLIENT_CONFIG__.disableSSR)
	) {
		createResetCss(renderer)
	}

	return (
		<FelaProvider rehydrate={false} renderer={renderer}>
			<ThemeProvider theme={theme}>
				{isValidElement(child)
					? cloneElement(child, { ...otherProps })
					: child}
			</ThemeProvider>
		</FelaProvider>
	)
}
StyleProvider.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object,
	renderer: PropTypes.object,
}

StyleProvider.defaultProps = {
	theme: defaultTheme,
	renderer: felaRenderer,
}
export default StyleProvider
