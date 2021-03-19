import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { makeStyles } from '@material-ui/styles';

export const PostBody = ({ body }) => {
  const classes = useStyles();
  return (
    <div className={classes.bodyContainer}>
      <Container className={classes.container}>
      <Row>
        <Col className={classes.bodyColumn} sm={!2} md={8}>
          {body}
        </Col>
      </Row>
    </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  bodyContainer:{
    backgroundColor: '#f5f5f5'
  },
  container:{
    paddingTop: 30,
    paddingBottom: 30,
  },
  bodyColumn: {
    
  }
}));