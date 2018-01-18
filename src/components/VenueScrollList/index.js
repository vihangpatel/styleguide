import React from 'react'
import PropTypes from 'prop-types'
import { createComponent } from 'react-fela'
import PlaceHolder from './component/Loader'
import CardStack from './component/CardStack'
import { __outerBox } from './__style'
/* * Adding style to the Cards container
   * It contains the cards to be displayed */

/* * Creating elements using react-fela
   * Components are created based on the styles added.
   * Component should always be starting with a capital letter.
*/
const OuterBox = createComponent(__outerBox)
/* * List which is returned and displayed based on the data provided.
   * By default 3 cards at a max will be shown along with one extra card
   * with an option to see all the other cards.
   * if no. of cards are not selected.
   * If no. of cards to be displayed is chossen
   * then rendering of the cards will happen with one more extra card 
   * showing an option to see all the cards.
*/

// TODO: Have to add Lazy Loading For the Cards.
const VenueScrollList = ({
	loading,
	venues,
	displayLimit,
	lockWidth,
	href,
}) => {
	let component = null
	if (loading || venues.length === 0) component = <PlaceHolder />
	else component = <CardStack {...{ venues, displayLimit, href }} />

	return <OuterBox lockWidth={lockWidth}>{component}</OuterBox>
}

VenueScrollList.propTypes = {
	/** Array containing the list of venues */
	venues: PropTypes.arrayOf(
		PropTypes.shape({
			/** Image url of the card. First three objects are shown always */
			imageUrl: PropTypes.string.isRequired,
			/** Image label to be shown below */
			venueName: PropTypes.string.isRequired,
			/** Callback to the identied venue page. Accepts a url string or a function callback. */
			href: PropTypes.oneOfType[(PropTypes.string, PropTypes.func)],
		})
	),
	/** Select the no. of venues to be shown else default 3 */
	displayLimit: PropTypes.number,
	/** Select true or false to show or hide the loader  */
	isLoading: PropTypes.bool,
	/** Set the display based on screen size or else show auto */
	lockWidth: PropTypes.bool,
	/** Callback to the full listing page url. Can be a function or a path string */
	href: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

/** Default PropTypes when nothing is passed , hence empty */
VenueScrollList.defaultProps = {
	venues: [],
	displayLimit: 4,
	isLoading: false,
	lockWidth: false,
	href: () => {},
}

export default VenueScrollList
