import { Button, ButtonGroup, Grid } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../config'
import { TBook } from '../script/components/Book/types'
import BookShelf from '../script/components/BookShelf'
import CustomRatioButton from './controls/ratio-button'
import { TextInput } from './controls/text-input/styled'

export type TBookshelf = {
  bookshelf: number
  books: TBook[]
}

const App = () => {
  const [picked, setPicked] = useState<'book' | 'novel'>('book')
  const [bookshelfs, setBookshelfs] = useState<TBookshelf[]>([])

  useEffect(() => {
    axios.get(config.apiHost + '/bookshelfs').then((res: AxiosResponse) => {
      console.log(res.data.bookshelfs)
      setBookshelfs(res.data)
    })
  }, [])

  return (
    <Grid
      container
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={3}
    >
      <Grid item>
        <ButtonGroup>
          <CustomRatioButton
            onClick={() => setPicked('book')}
            text={'Книга'}
            selected={picked === 'book'}
          />
          <CustomRatioButton
            onClick={() => setPicked('novel')}
            text={'Произведение'}
            selected={picked === 'novel'}
          />
        </ButtonGroup>
      </Grid>

      <Grid item container xs={12} justifyContent='space-around'>
        <Grid item>
          <TextInput placeholder='по названию' />
        </Grid>
        <Grid item>
          <TextInput placeholder='по автору' />
        </Grid>
        <Grid item>
          <TextInput placeholder='по жанру' />
        </Grid>
        <Grid item>
          <TextInput placeholder='по полке' />
        </Grid>
      </Grid>

      <Grid item container height='100%'>
        {bookshelfs &&
          bookshelfs.map((bs, index) => {
            return (
              <Grid item container key={index}>
                <BookShelf bookshelf={bs.bookshelf} books={bs.books} />
              </Grid>
            )
          })}
      </Grid>
    </Grid>
  )
}

export default App
