import React from 'react'
import { Grid } from '@material-ui/core'
import { PropTypes } from 'prop-types'

import BookCard from '../../../../components/BookCard'
import useStyles from './style'

const GridView = ({ result, handleOpen }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={ 2 } classes={ classes.generic }>
      {
      result && result.map((book, index) => {
        const { id } = book
        return (
          <Grid item lg = { 2 } md = { 4 } sm={ 6 } xs={ 6 } key={ `${ id }+grid` } >
            <BookCard key={ `${ id }+card` } { ...book } handleOpen={ handleOpen } />
          </Grid>
        )
      }
      )
    }
    </Grid>
  )
}

GridView.defaultProps = {
  result: null,
  handleOpen: () => {}
}

GridView.propTypes = {
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  handleOpen: PropTypes.func.isRequired
}

export default GridView
