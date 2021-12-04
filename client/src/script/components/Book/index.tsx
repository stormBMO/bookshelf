import { useEasybase } from 'easybase-react';
import React, { useEffect, useState } from 'react'
import { TBook } from './types';

const Book = () => {
  const [easybaseData, setEasybaseData] = useState<unknown[]>([]);
  const { db } = useEasybase();

  const mounted = async () => {
    const ebData = await db("BOOK").return().limit(10).all();
    setEasybaseData(ebData);
  }

  useEffect(() => {
    console.log(easybaseData);
  }, [easybaseData])

  useEffect(() => {
    mounted();
  }, [])

  return (
    <div>
      {easybaseData.map((book, index)=> {
        return (
          <div key={index}>
            <header>
              {(book as TBook).name || 'nothing'}
            </header>
          </div>
        )
      })}
    </div>
  )
}

export default Book;
