import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    width: 300,
    height:300,
    backgroundColor: 'white',
    boxShadow: "0px 5px 20px #555",
    margin: 20,
    textAlign: 'center',
    listStyleType: 'none',
    display: 'inline-table',
  },
  media: {
    height: 150,
    position: 'relative',
    overflow: 'hidden',
    marginBottom:5,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));