import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Pyramid from '../Chart/Pyramid'

const useStyles = makeStyles({
  root: {
    transitionDuration: '0.3s',
  },
});

const CardPyramid = ({ total, male, female }) => {
   const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Pyramid Population of 
          </Typography>
        </CardContent>
        <CardContent>
            <Pyramid total={total} male={male} female={female} />
        </CardContent>
    </Card>
  );
};

export default CardPyramid;
