import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
import { Subscribe } from "../components/subscribe.component";
import { Footer } from "../components/footer.component";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import { months } from "../data/months";
import Icon from "@material-ui/core/Icon";
import axios from "axios";
import { parseDate } from "./../utils/parse-date";

export const ArchivePage = () => {
  const [archives, setArchives] = useState();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_ENDPOINT_URL + "/posts/archive")
      .then((res) => {
        if (res.status === 200) {
          setArchives(res.data.years);
        }
      });
  }, []);
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.pageContainer}>
        <Container className={classes.container}>
          <Row>
            <Col>
              <h3 className={classes.heading}>Blog Archive</h3>
              <Accordion defaultActiveKey="0">
                {archives &&
                  archives.map((year) =>
                    year.months.map(
                      (month) =>
                        month.posts.length > 0 && (
                          <Card className={classes.card}>
                            <Accordion.Toggle
                              className={classes.cardHeader}
                              as={Card.Header}
                              eventKey={`${year.year}${month.month}`}
                            >
                              <div className={classes.monthHeader}>
                                <Icon>arrow_right</Icon>

                                <span>
                                  {`${months[month.month - 1]} ${year.year}`}
                                </span>
                                <span className="count">{`  (${month.posts.length} Posts)`}</span>
                              </div>
                            </Accordion.Toggle>
                            <Accordion.Collapse
                              eventKey={`${year.year}${month.month}`}
                            >
                              <Card.Body className={classes.cardBody}>
                                {month.posts.map((post) => (
                                  <div className="row">
                                    <span className="date">{parseDate(post.publishedAt)}</span>
                                    <span className="title">{post.title}</span>
                                  </div>
                                ))}
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        )
                    )
                  )}
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
      <Subscribe />
      <Footer />
    </Fragment>
  );
};

const useStyles = makeStyles(() => ({
  pageContainer: {
    minHeight: "32vh",
  },
  container: {
    backgroundColor: "#ffff",
  },
  monthHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
    "& .count": {
      marginLeft: "5px",
      color: "#1d86b8",
    },
    fontSize: 20,
    fontWeight: 600,
  },
  card: {
    border: "none",
  },
  cardHeader: {
    backgroundColor: "transparent",
    border: "none",
  },
  heading: {
    marginTop: 30,
    marginBottom: 30,
  },
  cardBody: {
    paddingLeft: 80,
    "& .row": {
      marginBottom: 10,
      '& .date':{
        color: 'orange',
      },
      '& .title':{
        color: "#1d86b8",
        fontSize: 18,
        fontWeight: 500,
        paddingLeft: 30,
      }
    },
  },
}));
