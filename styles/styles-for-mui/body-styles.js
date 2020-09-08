import {makeStyles} from "@material-ui/core/styles";
import {useMediaQuery} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  icon: {
    color: '#fff',
    marginLeft: 11,
  },
}))

export default function SimpleMediaQuery() {
  const position = useMediaQuery('(marginRight: 10px)');
  return position
}