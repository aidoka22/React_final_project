import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    width: 1200,
    height: 580,
    marginTop: 60,
    marginLeft:34,
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainer: {
    height: '100%',
    flex:1,
  },
  image: {
    height: '80%',
  },
  infoContainer: {
    flex: 1,
    padding:30,
  },
  title: {
    fontSize:70,
  },
  desc: {
    marginTop: 50,
    marginLeft: 0,
    fontSize: 20,
    fontWeight: 500,
    letterSpacing:3,
  },
  button: {
    padding: 10 ,
    fontSize: 20 ,
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
}));