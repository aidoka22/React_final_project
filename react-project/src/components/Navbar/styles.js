import { makeStyles } from '@material-ui/core/styles';
export default makeStyles((theme) => ({
  container: {
    height:50,
    boxShadow: '0 0 5px rgb(211,211,211)',
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: '30px',
  },
  title:{
    color: 'rgb(128,128,128)',
    fontWeight: 'bold',
    fontSize:25,
    textAlign:'left',
    cursor: 'pointer',
    listStyleType: 'none',
    textDecoration: 'none',
    paddingRight:500,
    paddingLeft:60,
    marginTop:50,
  },
  home: {
    color: 'grey',
    fontWeight: 'bold',
    fontSize:20,
    marginTop:-10,
    padding:30,
    textAlign:'right',
    cursor: 'pointer',
    listStyleType: 'none',
    textDecoration: 'none',
  },
  image: {
    position:'absolute',
    marginLeft: '-60px',
    marginTop:-15,
  },
  cart:{
    position:'absolute',
    marginLeft: '1200px',
    marginTop:-20,
  }
}));