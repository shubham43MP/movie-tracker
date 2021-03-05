import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  generic: {
    backgroundImage: ({ imageUrl }) => `url(${ imageUrl })`
  }
}))
