import { Button, Grid } from '@mui/material'
import React from 'react'
import BookShelf from '../script/components/BookShelf'

const App = () => {
  return (
    <Grid container justifyContent='center' alignItems='center' height='100vh'>
      <Button>Add book</Button>
      <BookShelf id={1} />
    </Grid>
  )
}

export default App
