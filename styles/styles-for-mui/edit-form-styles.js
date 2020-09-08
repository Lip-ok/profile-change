import {makeStyles} from "@material-ui/core/styles"

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: theme.spacing(300),
      height: 245,
      borderRadius: 10,
      margin: theme.spacing(3),
    },

  },
  btn: {
    marginTop: 30,
    marginBottom: 40,
    width: 212,
    height: 49,
    background: '#01BDA7',
    borderRadius: 36,
    textTransform: "none",
    color: '#fff',
    '&:hover': {
      background: '#01BDA7',
    },
  },
  btnContainer: {
    display: 'flex',
    justifyContent: "center",
  },
  input: {
    display: 'flex',
    alignItems: "center",
    height: 97,
    marginTop: 30,
    width: 254,
  },
}))