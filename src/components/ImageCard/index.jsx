import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useStyles from './style'

const ImageCard = ({ classes, imageUrl }) => {
  const localStyles = useStyles({ imageUrl })
  return (
    <div className={ classes.imageContainer }>
      <div className={ clsx(classes.imageCardRoot, localStyles.generic) }/>
    </div>
  )
}

ImageCard.propTypes = {
  classes: PropTypes.object.isRequired,
  imageUrl: PropTypes.string.isRequired
}

export default ImageCard
