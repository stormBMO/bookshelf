import { Button, ButtonGroup, Grid } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../config'
import BookShelf from '../script/components/BookShelf'
import CustomRatioButton from '../script/controls/ratio-button'
import { TextInput } from '../script/controls/text-input/styled'
import { TBookshelf, TBook } from '../script/types'
import { setBookshelfsUtil } from '../script/utils'
import { colors } from './theme/constant'

const App = () => {
  const [picked, setPicked] = useState<'book' | 'novel'>('book')
  const [bookshelfs, setBookshelfs] = useState<TBookshelf[]>([])
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const [genre, setGenre] = useState<string>('')
  const [bsnumber, setBsnumber] = useState<string>('')

  type Params = {
    title?: string
    author?: string
    genre?: string
    bsnumber?: string
  }

  useEffect(() => {
    axios.get(config.apiHost + '/books').then((res: AxiosResponse) => {
      setBookshelfs(setBookshelfsUtil(res.data as TBook[]))
    })
  }, [])

  const search = () => {
    const urlSubPath = picked == 'book' ? '/book' : '/book-by-novel'
    console.log(urlSubPath)
    axios
      .get(config.apiHost + urlSubPath, {
        params: { title, author, genre, bsnumber }
      })
      .then((res: AxiosResponse) => {
        setBookshelfs(setBookshelfsUtil(res.data as TBook[]))
      })
  }

  const handleCount = () => {
    if (genre.length > 0 && picked == 'book') {
      axios
        .get(config.apiHost + '/books-count', {
          params: {genre}
        })
        .then((res: AxiosResponse) => {
          alert(JSON.stringify(res.data))
        })
    }
  }

  return (
    <Grid
      container
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      spacing={3}
      sx={{
        overflowX: 'hidden'
      }}
    >
      <Grid item container>
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
        <Grid item>
          <Button onClick={handleCount}>посчитать</Button>
        </Grid>
      </Grid>

      <Grid
        item
        container
        xs={12}
        justifyContent='space-around'
        alignItems='center'
      >
        <Grid item>
          <TextInput
            placeholder='по названию'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextInput
            placeholder='по автору'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextInput
            placeholder='по жанру'
            value={genre}
            onChange={e => setGenre(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextInput
            placeholder='по полке'
            value={bsnumber}
            onChange={e => setBsnumber(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            sx={{
              color: 'white',
              background: colors.primary.main,
              borderRadius: '100rem',
              width: 'fit-content',
              ':hover': {
                color: colors.primary.main
              }
            }}
            onClick={() => search()}
          >
            {`>`}
          </Button>
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
