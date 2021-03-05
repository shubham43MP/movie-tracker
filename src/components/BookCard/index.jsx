import React from 'react'
import { Typography } from '@material-ui/core'
import { PropTypes } from 'prop-types'

import BookTitleAuthor from '../../components/BookTitleAuthor'
import useStyles from './style'

const displayChip = (containerClass, textClass, text) => (
  <div className={ containerClass }>
    <Typography className={ textClass }>
      { text }
    </Typography>
  </div>
)

const BookCard = (props) => {
  const {
    readingProgress, bookGenre, bookTitle, bookAuthor, bookImageUrl, description, handleOpen
  } = props
  const bookDetails = {
    readingProgress, bookGenre, bookTitle, bookAuthor, bookImageUrl, description
  }
  const classes = useStyles({ bookImageUrl })
  return (
    <div className={ classes.bookCardContainerWeb }>
      <div className={ classes.bookCardRoot } onClick={ () => handleOpen(bookDetails) }>
        { displayChip(classes.readingProgress, classes.readingProgressTypography, readingProgress) }
        { displayChip(classes.bookGenreContainer, classes.bookGenreTypography, bookGenre) }
      </div>
      <div className={ classes.bookTitAuth }>
        <BookTitleAuthor title ={ bookTitle } author= { bookAuthor } />
      </div>
    </div>
  )
}

BookCard.defaultProps = {
  handleOpen: () => {},
  readingProgress: '72%',
  bookGenre: 'Romance',
  bookTitle: 'Faiths',
  bookAuthor: 'David Adams',
  bookImageUrl: 'images/nature1.jpg',
  description: ''
}

BookCard.propTypes = {
  readingProgress: PropTypes.string,
  bookGenre: PropTypes.string,
  bookTitle: PropTypes.string,
  bookAuthor: PropTypes.string,
  bookImageUrl: PropTypes.string,
  description: PropTypes.string,
  handleOpen: PropTypes.func.isRequired
}

export default BookCard
