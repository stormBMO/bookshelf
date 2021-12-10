import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react'
import Book from '../Book';
import { TBook } from '../Book/types';


const BookShelf = () => {


  useEffect(() => {
    axios.get('http://localhost:9898/').then((res: AxiosResponse) => console.log(res.data))
  }, [])


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
    </div>
  )
}

export default BookShelf
