export type TBook = {
  id: number;
  author: string
  edition: string;
  title: string;
  publishing: string;
  bookshelf: number;
}

export type TBookshelf = {
  bookshelf: number
  books: TBook[]
}