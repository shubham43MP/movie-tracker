import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'

import BookTitleAuthor from '../BookTitleAuthor'
import ImageCard from '../ImageCard'
import useStyles from './style'

const CustomTable = ({ data }) => {
  const classes = useStyles()
  return (
    <>
      <Paper className='container'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={ classes.tableCellFont }>Book Title & Author</TableCell>
              <TableCell className={ classes.tableCellFont }>Genre</TableCell>
              <TableCell className={ classes.tableCellFont }>Reading Progress</TableCell>
              <TableCell className={ classes.tableCellFont }>Last Opened</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ bookAuthor, bookGenre, bookImageUrl, bookTitle, readingProgress, id }) => (
              <TableRow key={ `${ id }-tableRow` }>
                <TableCell className={ classes.imageTableCell }>
                  <ImageCard
                      key={ `${ id }-tableImageCard` }
                      imageUrl={ bookImageUrl }
                      classes={ classes }
                  />
                  <div className={ classes.bookTitAuthContainer } >
                    <BookTitleAuthor
                        key={ `${ id }-tableBookAuthTitle` }
                        title={ bookTitle }
                        author={ bookAuthor }
                      />
                  </div>
                </TableCell>
                <TableCell>{bookGenre}</TableCell>
                <TableCell>{readingProgress}</TableCell>
                <TableCell>{`${ id } minutes ago`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </>
  )
}

CustomTable.defaultProps = {
  data: null
}

CustomTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOf([ PropTypes.string, PropTypes.number ])))
}

export default CustomTable
