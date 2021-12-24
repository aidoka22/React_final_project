import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  cardItem:{
    width:250,
    height:280
  },
  media: {
    height: 150,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));