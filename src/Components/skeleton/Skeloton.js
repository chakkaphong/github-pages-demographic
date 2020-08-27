import React, { Fragment } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Grid, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import { Header } from "../Layout";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(2),
  },
  media: {
    height: 420,
  },
  content: {
    display: "flex",
    justifyContent: "space-around",
  },
  typography: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  detail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const Skeloton = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header />
      <Box bgcolor="#e0e0e0" style={{ height: "100%" }} pt={5}>
        <Grid container alignItems="center" justify="center" spacing={3}>
          <Grid item xs={12} xl={7} lg={7} md={10} sm={12} spaceing={10}>
            <Card className={classes.card}>
              <Skeleton width="100%">
                <Typography component="div" key={"h3"} variant={"h3"}>
                  .
                </Typography>
              </Skeleton>
              <Skeleton
                animation="wave"
                variant="rect"
                className={classes.media}
              />
              <div className={classes.content}>
                <CardContent className={classes.detail}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="textSecondary"
                    className={classes.typography}
                  >
                    Population
                  </Typography>
                  <Skeleton width="100%">
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.typography}
                    >
                      .
                    </Typography>
                  </Skeleton>
                </CardContent>
                <CardContent className={classes.detail}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="textSecondary"
                    className={classes.typography}
                  >
                    Median Age
                  </Typography>
                  <Skeleton width="100%">
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.typography}
                    >
                      .
                    </Typography>
                  </Skeleton>
                </CardContent>
                <CardContent className={classes.detail}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    color="textSecondary"
                    className={classes.typography}
                  >
                    Density
                  </Typography>
                  <Skeleton width="100%">
                    <Typography
                      variant="h4"
                      color="primary"
                      className={classes.typography}
                    >
                      .
                    </Typography>
                  </Skeleton>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} xl={7} lg={7} md={10} sm={12} spaceing={10}>
            <Card className={classes.card}>
              <Skeleton
                animation="wave"
                variant="rect"
                className={classes.media}
              />
              <Skeleton width="25%">
                <Typography component="div" key={"h3"} variant={"h3"}>
                  .
                </Typography>
              </Skeleton>
               <Skeleton width="40%">
                <Typography component="div" key={"h5"} variant={"h5"}>
                  .
                </Typography>
              </Skeleton>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default Skeloton;
