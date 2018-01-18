// @flow

import React from 'react'
import { createComponent } from 'react-fela'
import { __bookbutton, __priceInfo, __buttonText } from './__style'

const ButtonWrapper = createComponent(__bookbutton, 'button')
const PriceInfo = createComponent(__priceInfo)
const ButtonText = createComponent(__buttonText)

const BookButton = ({
	disabled,
	price,
	buttonInfo,
	nextStepInfo,
	onClick,
	isExact,
}) => (
	<div>
		<ButtonWrapper
			disabled={disabled}
			onClick={disabled ? null : onClick}
			passThrough={['onClick']}
		>
			{!disabled && (
				<PriceInfo isExact={isExact}>
					{isExact && <span>Total</span>} {price}{' '}
					{!isExact && <span>Onwards</span>}
				</PriceInfo>
			)}
			<ButtonText>
				{buttonInfo}
				<span style={{ minHeight: 10 }}>{nextStepInfo}</span>
			</ButtonText>
		</ButtonWrapper>
	</div>
)

BookButton.defaultProps = {
	price: '',
	buttonInfo: '',
	nextStepInfo: '',
	isExact: false,
}

export default BookButton
