import { Grid } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import Book from '../Book'
import { TBook } from '../Book/types'

const BookShelf = ({ id }: { id: number }) => {
  const [books, setBooks] = useState<TBook[]>([])

  useEffect(() => {
    axios
      .get(config.apiHost + '/books')
      .then((res: AxiosResponse) => setBooks(res.data.Books))
  }, [])

  return (
    <Grid container justifyContent='center' alignItems='center' spacing={2}>
      {books.map((book, index) => {
        return (
          <Grid item xs={4}>
            <Book key={index} date={book.edition} title={book.title} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default BookShelf
