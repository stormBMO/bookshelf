import { TBook, TBookshelf } from "./types";

export const setBookshelfsUtil = (books: TBook[]) => {
  const bshelfs: TBookshelf[] = [];
  books.forEach((book, i) => {
    if(!bshelfs.some((bs) => bs.bookshelf == book.bookshelf)){
      bshelfs.push({
        bookshelf: book.bookshelf,
        books: []
      })
    }
    bshelfs.forEach((bs) => {
      if(bs.bookshelf == book.bookshelf){
        bs.books.push(book);
      } 
    })
    // bshelfs[bshelfs.indexOf(bshelfs.filter((bs) => bs.bookshelf == book.bookshelf)[0])].books.push(book)
  })
  return bshelfs;
}