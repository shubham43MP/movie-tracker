import React from 'react'
import { PropTypes } from 'prop-types'

import Table from '../../../../components/Table'

const ListView = ({ result }) => {
  return (
    <>
      { result && (<Table data={ result } />) }
    </>
  )
}

ListView.defaultProps = {
  result: null
}

ListView.propTypes = {
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOf([ PropTypes.string, PropTypes.number ])))
}

export default ListView
