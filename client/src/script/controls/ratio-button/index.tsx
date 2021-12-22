import { Button } from '@mui/material'
import React from 'react'
import { borders, colors } from '../../../app/theme/constant'

const CustomRatioButton = ({
  onClick,
  selected,
  text
}: {
  onClick: () => void
  selected: boolean
  text: string
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        background: selected ? colors.primary.main : colors.common.white,
        color: selected ? colors.common.white : colors.primary.main,
        borderRadius: 20,
        border: borders.main,
        boxShadow: selected ? '0px 4px 4px rgba(0, 0, 0, 0.25);' : '',
        ':hover': {
          background: colors.primary.dark,
          border: borders.main,
          color: colors.common.white
        }
      }}
    >
      {text}
    </Button>
  )
}

export default CustomRatioButton
