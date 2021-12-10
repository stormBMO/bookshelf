import React from 'react'
import '../../../assets/css/book.css'

const Book = ({title, name, date} : {
  title: string;
  name?: string;
  date: string;
}) => {

  return (
    <div className='book'>
      <header>
        {title}
      </header>
      <body>
        {'It was written by ' + name}
      </body>
      <footer>
        {'Publish date: ' + date}
      </footer>
    </div>
  )
}

export default Book;
