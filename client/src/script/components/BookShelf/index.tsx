import { Grid, Typography } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import { TBookshelf } from '../../../app/App'
import { config } from '../../../config'
import Book from '../Book'
import { TBook } from '../Book/types'

const BookShelf = ({ bookshelf, books }: TBookshelf) => {

  return (
    <Grid
      item
      container
      justifyContent='start'
      alignItems='center'
      spacing={2}
    >
      <Grid item>
        <Typography variant='h4' color='initial'>
          {'Bookshelf: ' + bookshelf}
        </Typography>
      </Grid>

      <Grid item container spacing={4}>
        {books.map((book, index) => {
          console.log(book);
        
          return (
            <Grid item xs={2} key={book.id}>
              <Book title={book.title} date={book.edition} name={book.author}/>
            </Grid>
          )
        })}
      </Grid>
    </Grid>
  )
}

export default BookShelf
