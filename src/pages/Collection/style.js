import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 325

export default makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [ theme.breakpoints.up('sm') ]: {
      width: drawerWidth,
      flexShrink: 0
    },
    backgroundColor: '#F0F0F0 !important'
  },
  appBar: {
    [ theme.breakpoints.up('sm') ]: {
      width: `calc(100% - ${ drawerWidth }px)`,
      marginLeft: drawerWidth
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [ theme.breakpoints.up('sm') ]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#F0F0F0'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbarButtons: {
    marginLeft: 'auto'
  }
}))
