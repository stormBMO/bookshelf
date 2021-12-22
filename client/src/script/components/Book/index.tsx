import { Grid, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../../app/theme/constant'

const Book = ({
  title,
  name,
  date
}: {
  title: string
  name?: string
  date: string
}) => {
  return (
    <Grid
      container
      width='100%'
      wrap='nowrap'
      direction='column'
      borderRadius={2}
      bgcolor={colors.primary.main}
      height='300px'
      px={2}
    >
      <Grid item container xs={12} height='50%' alignItems='center'>
        <Grid item height='fit-content'>
          <Typography variant='h5' color='initial'>
            {title}
          </Typography>
        </Grid>
        <Grid item height='fit-content'>
          <Typography variant='body1' color='initial'>
            {name}
          </Typography>
        </Grid>
      </Grid>
      <Grid item alignItems='end' pb={3}>
        <Typography variant='subtitle2' color='initial'>
          {'Publish year: ' + new Date(date).getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Book
