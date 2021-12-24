import { makeStyles } from '@material-ui/core/styles';
import photo from '../../assets/About3.jpg'

export default makeStyles((theme) => ({
  container: {
    width: 1200,
    height: 600,
    marginTop: 60,
    marginLeft:34,
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  imgContainer: {
    height: 500,
    flex:1,
  },
  image: {
    height: '90%',
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
  container2:{
    height:600,
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing:3,
    position:'relative',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${photo})`,
    overflow: 'hidden',
    display: 'block',
    boxSizing: 'border-box',
    marginLeft:34,
  },
  container3: {
    maxWidth: 500,
    width: '100%',
    paddingRight: 15,
    paddingLeft: 15,
    marginRight: 'auto',
    marginLeft: '10%',
    display: 'block',
    overflow:'hidden',
    position:'relative',
  },
  row:{
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -15,
    marginLeft: -15,
    paddingRight:15,
    paddingLeft:15,
  },
  maintitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 700,
  },
  imgContainer2: {
    position: 'relative',
    paddingRight:15,
    paddingLeft:15,
    textAlign:'right',
  },
  announcing :{
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    position: 'relative',
    marginLeft: 40,
    marginBottom: 60,
    boxSizing: 'border-box',
  },
  imageAnnounce:{
    borderRadius: 15,
    overflow: 'hidden',
    maxWidth: 400,
    height: 'auto',
    verticalAlign: 'middle',
    borderStyle: 'none',
  }

}));
// infosContainer: {
//   width: 1800,
//   marginLeft:60,
//   padding:50,
// },
// info1Container: {
//   display: "inline-block",
//   width: 260,
//   margin: 0,
//   padding: 0,
// },