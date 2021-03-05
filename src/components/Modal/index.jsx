import React from 'react'
import ReactDOM from 'react-dom'
import { Dialog, IconButton, Typography, Button } from '@material-ui/core'
import { HighlightOff } from '@material-ui/icons'
import { PropTypes } from 'prop-types'

import BookTitleAuthor from '../../components/BookTitleAuthor'
import ImageCard from '../ImageCard'
import useStyles from './style'

const customButton = (classname, text, handleClose) => (
  <Button className={ classname }
    onClick={ () => handleClose() }
   >
    { text }
  </Button>
)

const ModalDialog = ({
  open,
  handleClose,
  modalData
}) => {
  const { bookTitle, bookAuthor, bookImageUrl, description } = modalData
  const classes = useStyles()
  return ReactDOM.createPortal(
    <>
      <Dialog
        classes={ { paper: classes.paper } }
        onClose={ handleClose }
        aria-labelledby='simple-dialog-title'
        open={ open }
      >
        <div className={ classes.rootPaper }>
          <IconButton onClick={ () => handleClose() } className={ classes.closeButton }>
            <HighlightOff/>
          </IconButton>
          <div className={ classes.flexer }>
            <ImageCard imageUrl={ bookImageUrl } classes={ classes } />
          </div>
          <div className={ classes.commonTypography }>
            <BookTitleAuthor title ={ bookTitle } author= { bookAuthor }/>
            <Typography className={ classes.descriptionTypography }>
              { description }
            </Typography>
          </div>
          <div className={ classes.buttonContainer }>
            <div className={ classes.bottomButtonContainer }>
              { customButton(classes.closeTextButton, 'Close', handleClose) }
              { customButton(classes.continueReadingButton, 'Continue Reading', handleClose) }
            </div>
          </div>
        </div>
      </Dialog>
    </>
    , document.getElementById('modal'))
}

ModalDialog.defaultProps = {
  open: false,
  handleClose: () => {},
  modalData: null
}

ModalDialog.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  modalData: PropTypes.objectOf(PropTypes.string)
}

export default ModalDialog
