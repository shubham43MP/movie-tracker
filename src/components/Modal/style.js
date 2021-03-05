import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  paper: {
    borderRadius: '30px'
  },
  rootPaper: {
    height: 'fit-content',
    width: 'fit-content',
    borderRadius: '25%'
  },
  imageContainer: {
    height: '240px',
    width: '150px',
    margin: 'auto'
  },
  imageCardRoot: {
    height: 'inherit',
    width: 'inherit',
    backgroundSize: 'cover',
    borderRadius: '25px',
    objectFit: 'contain',
    position: 'relative'
  },
  commonTypography: {
    textAlign: 'center',
    marginTop: '2%'
  },
  flexer: {
    display: 'flex',
    marginTop: '5%'
  },
  buttonContainer: {
    marginTop: '5%',
    display: 'flex',
    padding: '10px'
  },
  continueReadingButton: {
    backgroundColor: '#0000ff',
    color: 'white',
    marginLeft: '5px',
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
      color: 'black'
    }
  },
  closeButton: {
    right: 5,
    top: 5,
    position: 'absolute'
  },
  closeTextButton: {
    textTransform: 'none'
  },
  descriptionTypography: {
    padding: '15px'
  },
  bottomButtonContainer: {
    margin: 'auto'
  }
}))
