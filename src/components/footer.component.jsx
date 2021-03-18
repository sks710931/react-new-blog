import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Container } from 'react-bootstrap';

export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Container className={classes.container}>
        <p>2021 &#169; All Rights Reserved. Shivam Singh</p>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  footerContainer:{
    backgroundColor: 'black',
    color: 'white',
    marginBottom: -40
  },
  container: {
    paddingTop: 30,
    paddingBottom: 20,
    textAlign: 'center'
  }
}));