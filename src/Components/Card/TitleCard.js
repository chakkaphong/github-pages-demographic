import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import ShowMoreText from "react-show-more-text";

const useStyles = makeStyles((theme) => ({
  root: {
    spacing: [0, 2, 3, 5, 8],
  },
  media: {
    height: 140,
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

function CalculatePopulation(number) {
  const Population = {
    population: 0,
    unit: "",
  };
  if (number < 1 && number !== null) {
    Population.population = parseFloat(number) * 1000;
    Population.unit = "K";
  } else {
    Population.population = parseFloat(number).toFixed(1);
    Population.unit = "M";
  }
  return Population;
}

const TitleCard = ({ titleDetail, cityContent, handleClick }) => {
  const Population = CalculatePopulation(titleDetail.Population);
  const [expand, setExpand] = useState(false);
  const number = Math.random();
  const onClick = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    onClick();
    return () => {
      setExpand(false);
    };
  }, [titleDetail]);
  const classes = useStyles();
  return (
    <Box py={1}>
      <Card bgcolor="primary">
        <CardContent>
          <Typography gutterBottom variant="h3" color="primary">
            {titleDetail.Name}
          </Typography>
            <Typography variant="subtitle2" align="justify" color="textSecondary">
              {cityContent && (
                <div dangerouslySetInnerHTML={{ __html: cityContent }} />
              )}
            </Typography>
        </CardContent>
        <Divider variant="middle" />
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
            <Typography
              variant="h4"
              color="primary"
              className={classes.typography}
            >
              {`${Population.population}${Population.unit}`}
            </Typography>
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
            <Typography
              variant="h4"
              color="primary"
              className={classes.typography}
            >
              {`${titleDetail.MedianAge} Year`}
            </Typography>
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
            <Typography
              variant="h4"
              color="primary"
              className={classes.typography}
            >
              {`${titleDetail.Density} sq.km`}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

export default React.memo(TitleCard);
