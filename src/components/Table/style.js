import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  imageContainer: {
    height: '120px',
    width: '75px'
  },
  imageCardRoot: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    borderRadius: '25px',
    position: 'relative'
  },
  bookTitAuthContainer: {
    alignSelf: 'center',
    marginLeft: '3%'
  },
  tableCellFont: {
    fontWeight: 400,
    fontSize: '20px',
    color: 'rgba(0, 0, 0, 0.54)'
  },
  imageTableCell: {
    display: 'flex'
  }
}))
