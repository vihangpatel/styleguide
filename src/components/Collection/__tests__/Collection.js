import React from 'react'
import Collection from 'components/Collection'
import renderer from 'react-test-renderer'
import StyleProvider from 'utils/Provider'

describe('Collection Testing', () => {
	it('shallow renders correctly when data provided', () => {
		const collection = renderer
			.create(
				<StyleProvider>
					<Collection
						title="Discover"
						description="Events Happening Now"
						cards={[
							{
								name: 'Today',
								description: 'Events happening today',
								icon: 'today',
								imageBg:
									'//in.bmscdn.com/webin/test-m6/aggregation/today.jpg',
							},
							{
								name: 'Tomorrow',
								description: 'Events happening tomorrow',
								icon: 'tomorrow',
								imageBg:
									'//in.bmscdn.com/webin/test-m6/aggregation/tomorrow.jpg',
							},
							{
								name: 'Weekend',
								description:
									'Events happening over the weekend',
								icon: 'weekend',
								imageBg:
									'//in.bmscdn.com/webin/test-m6/aggregation/weekend.jpg',
							},
						]}
					/>
				</StyleProvider>
			)
			.toJSON()
		expect(collection).toMatchSnapshot()
	})

	it('shallow renders correctly when data is loading', () => {
		const collectionLoading = renderer
			.create(
				<StyleProvider>
					<Collection loading />
				</StyleProvider>
			)
			.toJSON()
		expect(collectionLoading).toMatchSnapshot()
	})
})
