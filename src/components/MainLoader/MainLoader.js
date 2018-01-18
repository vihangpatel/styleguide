// @flow

import React from 'react'
import { createComponent } from 'react-fela'

import {
	__topNav,
	__wrapper,
	__topLoader,
	__topLoaderAnimator,
} from './__style'

const Wrapper = createComponent(__wrapper)
const TopNav = createComponent(__topNav)
const TopLoader = createComponent(__topLoader)
const TopLoaderAnimator = createComponent(__topLoaderAnimator)

type Props = {
	/** Decides whether the loader will spread fullscreen with highest zIndex and becomes fixed. */
	locked?: boolean,
}

/** Acts as a global loader that overlays everything above. Can be used for page transistions or
 * to signify something as global action.
 */
const MainLoader = (props: Props) => (
	<Wrapper locked={props.locked}>
		<TopNav />
		<TopLoader>
			<TopLoaderAnimator />
		</TopLoader>
	</Wrapper>
)
MainLoader.defaultProps = {
	locked: true,
}

export default MainLoader
