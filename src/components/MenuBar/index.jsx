import React from 'react'
import {
  Divider, List, ListItem, ListItemIcon, ListItemText, Switch
} from '@material-ui/core'
import {
  PlayCircleOutline, AddCircleOutline, BrightnessMedium
} from '@material-ui/icons'

import useStyles from './style'

const customMenuList = (classes, text, Icon, isSwitch = false) => (
  <ListItem button key={ text } className={ classes.listItem }>
    <ListItemIcon className={ classes.listItemIcon } ><Icon /></ListItemIcon>
    <ListItemText primary={ text } />
    { isSwitch && <Switch /> }
  </ListItem>
)

const MenuBar = () => {
  const classes = useStyles()
  return (
    <>
      <div className={ classes.toolbar } />
      <Divider />
      <List>
        { customMenuList(classes, 'My Books', PlayCircleOutline) }
        { customMenuList(classes, 'Add New Books', AddCircleOutline) }
      </List>
      <Divider />
      <List>
        { customMenuList(classes, 'Dark Mode', BrightnessMedium, true) }
      </List>
    </>
  )
}

export default MenuBar
