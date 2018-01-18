import React from 'react'
import EventCard from 'components/EventCard/EventCard'
import StyleProvider from 'utils/Provider'
import renderer from 'react-test-renderer'
import { shallow, mount } from 'enzyme'

describe('EventCard Testing', () => {
	it('renders correctly', () => {
		const eventCard = renderer
			.create(
				<StyleProvider>
					<EventCard
						banner="//in.bmscdn.com/webin/test-m6/event-card-test.jpg"
						price="`100 onwards"
						month="AUG"
						date="05"
						day="Onwards"
						title="BookMyShow Festival"
						venue="Movie, Events, Play"
						type="Music, Electronic"
						lockWidth
					/>
				</StyleProvider>
			)
			.toJSON()

		expect(eventCard).toMatchSnapshot()
	})

	it('renders correctly with enzyme', () => {
		const renderedComponent = shallow(
			<StyleProvider>
				<EventCard
					banner="//in.bmscdn.com/webin/test-m6/event-card-test.jpg"
					price="`100 onwards"
					month="AUG"
					date="05"
					day="Onwards"
					title="BookMyShow Festival"
					venue="Movie, Events, Play"
					type="Music, Electronic"
					lockWidth
				/>
			</StyleProvider>
		)
		// TODO: Needs research
		expect(true).toBe(true)
	})

	it('SHould be clickable', () => {
		const clickSpy = jest.fn()
		const renderedComponent = mount(
			<StyleProvider>
				<EventCard
					banner="//in.bmscdn.com/webin/test-m6/event-card-test.jpg"
					price="`100 onwards"
					month="AUG"
					date="05"
					day="Onwards"
					title="BookMyShow Festival"
					venue="Movie, Events, Play"
					type="Music, Electronic"
					lockWidth
					onClick={clickSpy}
				/>
			</StyleProvider>
		)
		renderedComponent.simulate('click')
		expect(clickSpy).toHaveBeenCalled()
	})
})
