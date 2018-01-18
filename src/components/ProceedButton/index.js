// @flow

import React from 'react'
import { createComponent } from 'react-fela'
import { __proceedbutton, __buttonText } from './__style'
import SubLoader from '../SubLoader/SubLoader'

const ButtonWrapper = createComponent(__proceedbutton, 'button')
const ButtonText = createComponent(__buttonText)

const ProceedButton = ({ name, onClick, color, disabled, loading }) => (
	<div>
		<ButtonWrapper
			disabled={disabled}
			onClick={disabled ? null : onClick}
			color={color}
			passThrough={['onClick']}
		>
			{loading ? <SubLoader /> : <ButtonText>{name}</ButtonText>}
		</ButtonWrapper>
	</div>
)

export default ProceedButton
