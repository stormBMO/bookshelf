import { Grid, Typography } from '@mui/material'
import React from 'react'
import '../../../assets/css/book.css'

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
      bgcolor='#7FD2FB'
      alignItems='center'
    >
      <Grid item>
        <Typography variant='h5' color='initial'>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' color='initial'>
          {'It was written by ' + name}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h5' color='initial'>
          {'Publish year: ' + (new Date(date).getFullYear())}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Book
