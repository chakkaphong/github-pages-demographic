import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { green } from "@material-ui/core/colors";
import { Box } from "@material-ui/core";

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
  detail: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: green[500],
    },
  },
}));

const TitleCard = ({ titleDetail }) => {
  const classes = useStyles();
  return (
    <Box py={1}>
      <Card bgcolor="primary">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h3" color="primary">
              {titleDetail.Name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
              {Math.random()}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className={classes.content}>
          <CardContent className={classes.detail}>
            <Typography gutterBottom variant="h5" color="textSecondary">
              Population
            </Typography>
            <Typography variant="h4" color="primary">
              {`${titleDetail.Population}M`}
            </Typography>
          </CardContent>
          <CardContent className={classes.detail}>
            <Typography gutterBottom variant="h5" color="textSecondary">
              Median Age
            </Typography>
            <Typography variant="h4" color="primary">
              {`${titleDetail.MedianAge} Year`}
            </Typography>
          </CardContent>
          <CardContent className={classes.detail}>
            <Typography gutterBottom variant="h5" color="textSecondary">
              Density
            </Typography>
            <Typography variant="h4" color="primary">
              {`${titleDetail.Density} sq. km`}
            </Typography>
          </CardContent>
          <CardContent className={classes.detail}>
            <Typography gutterBottom variant="h5" color="textSecondary">
              GlobalRank
            </Typography>
            <Typography variant="h4" color="primary">
              20
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Box>
  );
};

export default React.memo(TitleCard);
