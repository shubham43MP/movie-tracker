import React from 'react'
import PropTypes from 'prop-types'

import { LinearProgress as LinearLoader } from '@material-ui/core'

const Loader = ({ size, color, classes, thickness }) => (
  <LinearLoader classes={ classes } color={ color } />
)

export default Loader

Loader.defaultProps = {
  size: 40,
  color: 'primary',
  classes: {},
  thickness: 3.6
}

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  classes: PropTypes.object,
  thickness: PropTypes.strings
}
