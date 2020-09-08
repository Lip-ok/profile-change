import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({

  btn: {
    marginTop: 30,
    marginBottom: 40,
    width: 212,
    height: 49,
    background: '#01BDA7',
    borderRadius: 36,
    textTransform: 'none',
    color: '#fff',
    '&:hover': {
      background: '#01BDA7',
    },
  },
  btnUnSave: {
    marginTop: 30,
    marginBottom: 40,
    width: 212,
    height: 49,
    background: '#fff',
    borderRadius: 36,
    border: '1px solid #01BDA7',
    textTransform: 'none',
    color: '#01BDA7',
    '&:hover': {
      background: '#fff',
    },
  },
  dialogContainer: {
    maxWidth: 800,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  contentWrapper:{
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
}))