import React from 'react'
import {
  AppBar, Toolbar, IconButton, Typography, Divider
} from '@material-ui/core'
import {
  Apps as AppsIcon, List as ListIcon, Menu as MenuIcon
} from '@material-ui/icons'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import useStyles from './style'

const TopBar = ({ handleDrawerToggle, setIsGridView, isGridView }) => {
  const classes = useStyles()
  return (
    <>
      <AppBar position='fixed' color='inherit' elevation={ 0 } className={ classes.appBar }>
        <Toolbar>
          <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={ handleDrawerToggle }
          className={ classes.menuButton }
        >
            <MenuIcon classes={ classes.menuIcon }/>
          </IconButton>
          <Typography variant='h6' noWrap className={ classes.topbarHeading }>
            Book Library
          </Typography>
          <IconButton
            aria-label='grid view'
            className={ clsx(classes.toolbarButtons, (isGridView ? classes.iconSelected : classes.iconNotSelected)) }
            onClick={ () => setIsGridView(true) }
          >
            <AppsIcon/>
          </IconButton>
          <IconButton
            aria-label='list view'
            className={ (isGridView ? classes.iconNotSelected : classes.iconSelected) }
            onClick={ () => setIsGridView(false) }
          >
            <ListIcon/>
          </IconButton>
        </Toolbar>
        <Divider className={ classes.divider }/>
      </AppBar>
    </>
  )
}

TopBar.defaultProps = {
  handleDrawerToggle: () => {},
  setIsGridView: () => {},
  isGridView: true
}

TopBar.propTypes = {
  handleDrawerToggle: PropTypes.func.isRequired,
  setIsGridView: PropTypes.func.isRequired,
  isGridView: PropTypes.bool
}

export default TopBar
