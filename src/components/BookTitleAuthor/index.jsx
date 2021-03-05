import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

import useStyles from './style'

const BookTitleAuthor = ({ title, author }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant='h6' className={ classes.titleTypography }>{ title }</Typography>
      <Typography color='textSecondary' className={ classes.authorTypography }>{ author }</Typography>
    </>
  )
}

BookTitleAuthor.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default BookTitleAuthor
