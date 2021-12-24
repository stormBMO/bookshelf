import { Box, Grid, Modal, Typography } from '@mui/material'
import axios, { AxiosResponse } from 'axios'
import React, { useState } from 'react'
import { borders, colors } from '../../../app/theme/constant'
import { config } from '../../../config'
import { TBook } from '../../types'

const Book = ({
  title,
  author,
  date,
  bookshelf
}: {
  title: string
  author: string
  date: string
  bookshelf: number
}) => {
  const [open, setOpen] = useState(false)
  const [bookData, setBookData] = useState<TBook[] | null>(null)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleClick = () => {
    if (open == false) {
      handleOpen()
      if (!bookData) {
        axios
          .get(config.apiHost + '/book-diplicates', {
            params: { title, author, bookshelf }
          })
          .then((res: AxiosResponse) => {
            setBookData(res.data)
          })
      }
    }
  }

  return (
    <Grid
      container
      width='100%'
      wrap='nowrap'
      direction='column'
      borderRadius={2}
      bgcolor={colors.primary.main}
      height='300px'
      px={2}
      onClick={handleClick}
      sx={{
        cursor: 'pointer'
      }}
    >
      <Grid item container xs={12} height='50%' alignItems='center'>
        <Grid item height='fit-content' width='100%'>
          <Typography variant='h5' color='initial'>
            {title}
          </Typography>
        </Grid>
        <Grid item height='fit-content' width='100%'>
          <Typography variant='body1' color='initial'>
            {author}
          </Typography>
        </Grid>
      </Grid>
      <Grid item alignItems='end' pb={3}>
        <Typography variant='subtitle2' color='initial'>
          {'Publish year: ' + new Date(date).getFullYear()}
        </Typography>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: borders.main,
            borderRadius: '15px',
            boxShadow: 23,
            p: 4,
            outline: 'none'
          }}
        >
          {bookData ? (
            <>
              <Typography id='modal-modal-title' variant='h6' component='h2'>
                {`Название книги: ` + bookData[0].title}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {`Автор книги: ` + bookData[0].author}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {`Дата выпуска книги: ` +
                  new Date(bookData[0].edition).toDateString()}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {`Издание: ` + bookData[0].publishing}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {`Количество книг в библеотеке: ` + bookData.length}
              </Typography>
              <Typography id='modal-modal-description' sx={{ mt: 2 }}>
                {bookData.length == 1
                  ? 'Данная книга в одном экземпляре'
                  : `Эта книга есть еще на ` +
                    bookData
                      .filter(bk => bk.bookshelf != bookshelf)
                      .map((bk, i) => bk.bookshelf)
                      .toString() +
                    ' полке'}
              </Typography>
            </>
          ) : (
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Загрузка
            </Typography>
          )}
        </Box>
      </Modal>
    </Grid>
  )
}

export default Book
