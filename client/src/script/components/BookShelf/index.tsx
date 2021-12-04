import { useEasybase } from 'easybase-react';
import React, { useEffect, useState } from 'react'
import Book from '../Book';
import { TBook } from '../Book/types';


const BookShelf = () => {
  const [easybaseData, setEasybaseData] = useState<TBook[]>([]);
  const { db } = useEasybase();

  const mounted = async () => {
    const ebData = await db("BOOK").return().limit(10).all();
    setEasybaseData(ebData as TBook[]);
  }

  useEffect(() => {
    console.log(easybaseData);
  }, [easybaseData])

  useEffect(() => {
    mounted();
  }, [])


  return (
    <div style={{ 
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      {easybaseData.map((book, index) =>
        <Book
          key={index}
          title={book._key}
          name={book.name || 'unknown'}
          date={book.id}
        />)}
    </div>
  )
}

export default BookShelf
