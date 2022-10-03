import React from 'react'
import { BUTTONS } from '../../Style/ConstantStyled'
import { SubmitButton } from './Buttons.style'
const ConfirmButton = ({text, gridArea, form, disabled}) => {
  return (
    <SubmitButton
      color={BUTTONS.submit.colors}
      width={BUTTONS.submit.size.width}
      height={BUTTONS.submit.size.height}
      weight={BUTTONS.submit.weight}
      borderRadius={BUTTONS.submit.borderRadius}
      gridArea={gridArea}
      disabled={disabled}
      type="submit"
      form={form}>
      {text.toUpperCase()}
      </SubmitButton>
  )
}

export default ConfirmButton