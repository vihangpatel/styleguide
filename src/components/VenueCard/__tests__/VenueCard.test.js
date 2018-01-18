import React from 'react'
import VenueCard from 'components/VenueCard'
import StyleProvider from 'utils/Provider'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'

const venueCardProps = {
	key: 'PTHV',
	venueCode: 'PTHV',
	address:
		'20 Janki Kutir, Juhu Church Road, Mumbai, Maharashtra 400049, India',
	title: 'Prithvi Theatre',
	imageUrl: 'in.bmscdn.com/venueimages/venuecover/PTHV.jpg',
	distance: '100',
}

describe('VenueCard Testing', () => {
	it('shallow renders correctly', () => {
		const venueCard = shallow(<VenueCard {...venueCardProps} />)
		// console.log(venueCard)
		// TODO: Write more complex tests
		expect(false).toBe(true)
	})

	it('Creates venue card snapshot', () => {
		const venueCardSnapshot = renderer
			.create(
				<StyleProvider>
					<VenueCard {...venueCardProps} />
				</StyleProvider>
			)
			.toJSON()

		expect(venueCardSnapshot).toMatchSnapshot()
	})

	it('Should be clickable', () => {
		const clickSpy = jest.fn()
		const renderedComponent = mount(
			<StyleProvider>
				<VenueCard {...venueCardProps} handleVenueSelect={clickSpy} />
			</StyleProvider>
		)
		renderedComponent.simulate('click')
		expect(clickSpy).toHaveBeenCalled()
	})
})
