import { Grid, Typography } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { config } from '../../../config'
import { TBookshelf } from '../../types'
import Book from '../Book'

const BookShelf = ({ bookshelf, books }: TBookshelf) => {

  return (
    <Grid
      item
      container
      justifyContent='start'
      alignItems='center'
      spacing={2}
      p={2}
    >
      <Grid item>
        <Typography variant='h4' color='initial'>
          {'Bookshelf: ' + bookshelf}
        </Typography>
      </Grid>

      <Grid item container spacing={4}>
        {books.map((book, index) => {
          return (
            <Grid item xs={2} key={book.id}>
              <Book title={book.title} date={book.edition} author={book.author} bookshelf={bookshelf}/>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default BookShelf
