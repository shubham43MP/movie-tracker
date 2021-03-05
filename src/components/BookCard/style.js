import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  bookCardContainerWeb: {
    height: 'inherit',
    width: 'inherit'
  },
  bookCardRoot: {
    height: '350px',
    width: '95%',
    backgroundSize: 'cover',
    borderRadius: '25px',
    position: 'relative',
    backgroundImage: ({ bookImageUrl }) => `url(${ bookImageUrl })`,
    [ theme.breakpoints.between('xs', 'sm') ]: {
      height: '270px',
      width: '100%'
    }
  },
  bookTitleTypography: {
    width: 'inherit',
    marginTop: '1.5%',
    maxWidth: 'inherit',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  },
  readingProgress: {
    backgroundColor: 'black',
    borderRadius: '10px',
    width: '30%',
    height: '11%',
    position: 'absolute',
    margin: '6%',
    opacity: '60%',
    display: 'table'
  },
  readingProgressTypography: {
    color: 'white',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    fontWeight: 800
  },
  bookGenreContainer: {
    backgroundColor: 'black',
    borderRadius: '11px',
    width: '52%',
    maxWidth: '55%',
    height: '12%',
    position: 'absolute',
    margin: '6%',
    opacity: '75%',
    display: 'table',
    bottom: 0,
    right: 0
  },
  bookGenreTypography: {
    color: 'white',
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
    marginLeft: '2px',
    marginRight: '2px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    maxWidth: '85px',
    fontWeight: 800
  },
  bookTitAuth: {
    marginTop: '10px'
  }
}))
