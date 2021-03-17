import { makeStyles } from '@material-ui/styles';


export const useCommonStyles = makeStyles(() => ({
  btnPrimary:{
    all:'unset',
    color: 'white',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: '50px',
    textTransform: 'uppercase',
    backgroundColor: '#1d86b8',
    width: 270,
    textAlign: 'center',
    borderRadius: 5,
    '&:hover':{
      backgroundColor: '#50b6e7',
    }
  }
}));
