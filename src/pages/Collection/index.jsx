import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  CssBaseline, Drawer, Hidden, Divider
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'

import Menubar from '../../components/MenuBar'
import TopBar from '../../components/TopBar'
import useStyles from './style'
import Loading from '../../components/Loaders'
import ModalDialog from '../../components/Modal'
import GridView from './molecules/GridView'
import ListView from './molecules/ListView'
import useAsync from '../../hooks/useAsync'
import { FetchBookData } from '../../utils/services'

const Collection = ({ window }) => {
  const classes = useStyles()
  const theme = useTheme()
  const [ cellOpen, setCellOpen ] = useState(false)
  const [ isGridView, setIsGridView ] = useState(true)
  const [ modalData, setModalData ] = useState({})
  const [ openModal, setOpenModal ] = useState(false)
  const handleOpen = (bookDetails) => {
    setOpenModal(true)
    setModalData(bookDetails)
  }
  const handleClose = () => {
    setOpenModal(false)
    setModalData({})
  }
  const { mutate, isLoading, result } = useAsync(FetchBookData)
  useEffect(() => mutate(), [])

  const handleDrawerToggle = () => setCellOpen(!cellOpen)
  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={ classes.root }>
      <CssBaseline />
      <TopBar handleDrawerToggle={ handleDrawerToggle } setIsGridView={ setIsGridView } isGridView={ isGridView }/>
      <nav className={ classes.drawer } aria-label='mailbox folders'>
        <Hidden smUp implementation='css'>
          <Drawer
            container={ container }
            variant='temporary'
            anchor={ theme.direction === 'rtl' ? 'right' : 'left' }
            open={ cellOpen }
            onClose={ handleDrawerToggle }
            classes={ {
              paper: classes.drawerPaper
            } }
            ModalProps={ { keepMounted: true } }
          >
            <Menubar />
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation='css'>
          <Drawer
            classes={ {
              paper: classes.drawerPaper
            } }
            variant='permanent'
            open
          >
            <Menubar />
          </Drawer>
        </Hidden>
      </nav>
      <Divider />
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        {
          isLoading
            ? (
              <Loading/>
              )
            : (
                isGridView
                  ? (<GridView result={ result } handleOpen={ handleOpen }/>)
                  : (<ListView result={ result }/>)
              )
        }
        { openModal &&
          (
            <ModalDialog
              open={ openModal }
              handleClose = { handleClose }
              modalData = { modalData }
            />
          )
        }
      </main>
    </div>
  )
}

Collection.propTypes = {
  window: PropTypes.func
}

export default Collection
