import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  items: {
    textDecoration:'underline',
    textAlign: 'center',
  },
  item:{
    listStyleType: 'none',
    display: 'inline-table',
    padding:"0 20px 20px 20px",
  }
}));