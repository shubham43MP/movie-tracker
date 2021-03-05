import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  listItem: {
    '&:hover': {
      background: 'white',
      borderRadius: '20px'
    }
  },
  listItemIcon: {
    paddingLeft: '16px'
  }
}))
