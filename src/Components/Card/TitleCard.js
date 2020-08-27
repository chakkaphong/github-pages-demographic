import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box, Collapse } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";

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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  expandPosition: {
    display: "flex",
    justifyContent: "flex-end",
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

  const Population = {
    population: 0,
    unit: "",
  };
function CalculatePopulation(number) {
  
  if(number === null || number.length === 0 ) return null;
  if (number < 1 && number !== null) {
    Population.population = parseFloat(number) * 1000;
    Population.unit = "K";
  } else {
    Population.population = parseFloat(number).toFixed(1);
    Population.unit = "M";
  }
  return Population;
}

const TitleCard = ({ titleDetail, cityContent }) => {
  const Population = CalculatePopulation(titleDetail.Population);
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() =>{


    return () =>{
      setExpanded(false);      
    }
  },[titleDetail, cityContent])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box py={1}>
      <Card bgcolor="primary">
        <CardContent>
          <Typography gutterBottom variant="h3" color="primary">
            {titleDetail.Name}
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Typography
              variant="subtitle2"
              align="justify"
              color="textSecondary"
            >
              {cityContent && (
                <div dangerouslySetInnerHTML={{ __html: cityContent }} />
              )}
            </Typography>
          </Collapse>
          <div className={classes.expandPosition}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
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
