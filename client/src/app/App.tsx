import { Button, ButtonGroup, Grid } from '@mui/material'
import React, { useState } from 'react'
import BookShelf from '../script/components/BookShelf'
import CustomRatioButton from './controls/ratio-button'

const App = () => {
  const [picked, setPicked] = useState<'book' | 'novel'>('book')

  return (
    <Grid
      container
      width='100vw'
      height='100vh'
      justifyContent='100%'
      alignItems='center'
    >
      <Grid item>
        <ButtonGroup>
          <CustomRatioButton onClick={()=>setPicked('book')} text={'Книга'} selected={picked == 'book'} />
          <CustomRatioButton onClick={()=>setPicked('novel')} text={'Произведение'} selected={picked == 'novel'} />
        </ButtonGroup>
      </Grid>

      {Array(3)
        .fill(0)
        .map((bs, key) => {
          return <BookShelf key={key} id={key} />
        })}
    </Grid>
  )
}

export default App
