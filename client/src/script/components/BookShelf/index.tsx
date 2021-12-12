import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import { config } from '../../../config';
import Book from '../Book';
import { TBook } from '../Book/types';


const BookShelf = ({id} : {id: number}) => {
  const [books, setBooks] = useState<TBook[]>([])

  useEffect(() => {
    axios.get(config.apiHost + '/books').then((res: AxiosResponse) => setBooks(res.data.Books))
  }, [])


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      {books.map((book, index) => {
        return (
          <Book key={index} date={book.edition} title={book.title} />
        )
      })}
    </div>
  )
}

export default BookShelf
