import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    padding: 0,
    margin: '20px 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex',
  },
  heading: {
    color: 'black',
    marginRight: '20px',
    alignItems: 'flex',

  },
 
  btn1: {
    marginLeft: '450px',
    background: '#0ecfe0',
    borderRadius:  '20px',
  	width: '150px',
	  fontWeight: 'bold',
	  fontSize: '14px',
  },
  btn2: {
    marginLeft: '50px',
    background: '#0ecfe0',
    borderRadius:  '20px',
  	width: '80px',
	  fontWeight: 'bold',
	  fontSize: '14px',
  },
}));