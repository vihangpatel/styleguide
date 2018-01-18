import React from 'react'
import { createComponent } from 'react-fela'
import { Spacer } from 'kilvin'
import { __card } from '../__styles'
import { PlaceHolder } from 'design-framework/common/ui/PlaceHolder'
import LazyImage from 'design-framework/common/ui/LazyImage'
import { hrefHandler } from 'design-framework/utils/helpers'

const Card = createComponent(__card, 'div', ['onClick'])

const VenueCard = props =>
	props.loading ? (
		<Card>
			<PlaceHolder width={156} height={96} />
			<Spacer size={5} />
			<div className="content-wrapper">
				<PlaceHolder marginLeft={15} width={100} height={16} />
				<Spacer size={3} />
				<PlaceHolder marginLeft={15} width={50} height={10} />
			</div>
		</Card>
	) : (
		<Card onClick={props.href && hrefHandler(props.href)}>
			<div>
				<div className="img-wrapper">
					<LazyImage
						alt="venue img"
						src={`//in.bmscdn.com/venueimages/venuecover/${
							props.venueCode
						}.jpg`}
					/>
				</div>
				<div className="content-wrapper">
					<h2>{props.venueName}</h2>
					<p>{props.venueAddress}</p>
				</div>
			</div>
		</Card>
	)

export default VenueCard
