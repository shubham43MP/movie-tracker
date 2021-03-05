import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 325

export default makeStyles((theme) => ({
  appBar: {
    [ theme.breakpoints.up('sm') ]: {
      width: `calc(100% - ${ drawerWidth }px)`,
      marginLeft: drawerWidth,
      backgroundColor: 'white'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [ theme.breakpoints.up('sm') ]: {
      display: 'none'
    }
  },
  toolbarButtons: {
    marginLeft: 'auto'
  },
  topbarHeading: {
    color: 'black',
    fontSize: 30,
    [ theme.breakpoints.between('xs', 'sm') ]: {
      fontSize: '20px'
    }
  },
  menuIcon: {
    color: 'black'
  },
  divider: {
    width: '98%',
    margin: 'auto'
  },
  iconSelected: {
    background: '#F0F0F0'
  },
  iconNotSelected: {
    background: 'unset'
  }
}))
