import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'

import CollectionStack from './components/CollectionStack'
import LoadingCollection from './components/LoadingCollection'

import { __header, __description, __wrapper } from './__style'

const Header = createComponent(__header)
const Description = createComponent(__description)
const Wrapper = createComponent(__wrapper)

class Collection extends PureComponent {
	static propTypes = {
		/** Pass Array of colection data */
		cards: PropTypes.arrayOf(PropTypes.object),
		/** Title of Collection */
		title: PropTypes.string,
		/** Description of collection */
		description: PropTypes.string,
		/** Show loading cards */
		loading: PropTypes.bool,
	}

	static defaultProps = {
		cards: [],
		title: '',
		description: '',
		loading: false,
	}

	render() {
		const { title, description, loading, cards } = this.props

		if (!loading && cards.length === 0) {
			return null
		}

		return loading ? (
			<LoadingCollection />
		) : (
			<Wrapper>
				{title &&
					description && (
						<div>
							<Header>{title}</Header>
							<Description>{description}</Description>
						</div>
					)}
				<CollectionStack cards={cards} />
			</Wrapper>
		)
	}
}

export default Collection
