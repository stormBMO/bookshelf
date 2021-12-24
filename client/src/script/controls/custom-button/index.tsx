import { Button } from '@mui/material'
import React from 'react'
import { colors } from '../../../app/theme/constant'

const CustomButton = ({
  onClick,
  text,
  borderRadius = '15px'
}: {
  onClick: () => void
  text: string,
  borderRadius?: string;
}) => {
  return (
    <Button
      sx={{
        color: 'white',
        background: colors.primary.main,
        borderRadius: borderRadius,
        width: 'fit-content',
        ':hover': {
          color: colors.primary.main
        }
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  )
}

export default CustomButton
