import { createRenderer as createFelaRenderer } from 'fela'
import validator from 'fela-plugin-validator'
import friendlyPsuedo from 'fela-plugin-friendly-pseudo-class'
import placeholderPrefixer from 'fela-plugin-placeholder-prefixer'
import unit from 'fela-plugin-unit'
import beautifier from 'fela-beautifier'
import statistics from 'fela-statistics'
import webPreset from 'fela-preset-web'
// import monolithic from 'fela-monolithic'
import namedMediaQuery from 'fela-plugin-named-media-query'
import whitelistMediaQuery from './whitelistMediaQueryPlugin'
import theme from './base-ui-theme'
// import combineArrays from 'fela-combine-arrays'

const mediaQueries = {
	mobileXs: `@media (min-width: ${theme.breakpoints.mobileXs})`,
	mobileX: `@media (min-width: ${theme.breakpoints.mobileX})`,
	mobileXl: `@media (min-width: ${theme.breakpoints.mobileXl})`,
	tablet: `@media (min-width: ${theme.breakpoints.tablet})`,
	desktop: `@media (min-width: ${theme.breakpoints.desktop})`,
	desktopLarge: `@media (min-width: ${theme.breakpoints.desktopLarge})`,
}

const removePrefix = query => query.replace('@media ', '')

const createRenderer = () => {
	const plugins = [
		...webPreset,
		friendlyPsuedo(),
		namedMediaQuery(mediaQueries),
		placeholderPrefixer(),
		unit('px'),
	]
	const enhancers = []

	if (process.env.NODE_ENV === 'development') {
		plugins.push(
			validator({
				logInvalid: true,
				deleteInvalid: true,
			})
		)
		plugins.push(whitelistMediaQuery(mediaQueries))
		// enable statistics if set from server config.
		if (__CLIENT__) {
			if (window && window.felaStatisticsMode) plugins.push(statistics())
		}
		enhancers.push(beautifier())
		// enhancers.push(monolithic({ prettySelectors: true }))
	}

	return createFelaRenderer({
		plugins,
		enhancers,
		selectorPrefix: '',
		mediaQueryOrder: [
			removePrefix(mediaQueries.mobileXs),
			removePrefix(mediaQueries.mobileX),
			removePrefix(mediaQueries.mobileXl),
			removePrefix(mediaQueries.tablet),
			removePrefix(mediaQueries.desktop),
			removePrefix(mediaQueries.desktopLarge),
		],
	})
}

export default createRenderer
