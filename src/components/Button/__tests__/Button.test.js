import React from 'react'
import Button from 'components/Button'
import renderer from 'react-test-renderer'
import StyleProvider from 'utils/Provider'
import { shallow, mount } from 'enzyme'

describe('Button Testing', () => {
	it('renders correctly', () => {
		const eventCard = renderer
			.create(
				<StyleProvider>
					<Button
						buttonVariant="default"
						isEnabled
						width={100}
						height={35}
						label="Default"
						showLoader
					/>
				</StyleProvider>
			)
			.toJSON()
		expect(eventCard).toMatchSnapshot()
	})

	it('renders correctly with enzyme', () => {
		const renderedComponent = shallow(
			<StyleProvider>
				<Button
					buttonVariant="default"
					isEnabled
					width={100}
					height={35}
					label="Default"
					showLoader
				/>
			</StyleProvider>
		)
		expect(renderedComponent.getElement('button')).toBeDefined()
	})

	it('should be clickable', () => {
		const clickSpy = jest.fn()
		const renderedComponent = mount(
			<StyleProvider>
				<Button
					buttonVariant="default"
					isEnabled
					width={100}
					height={35}
					label="Default"
					showLoader
					click={clickSpy}
				/>
			</StyleProvider>
		)
		renderedComponent.simulate('click')
		expect(clickSpy).toHaveBeenCalled()
	})
})
