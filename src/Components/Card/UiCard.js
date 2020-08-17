import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core/";
import TimeSeries from "../Chart/TimeSeries";

function handleClick(event) {
  event.preventDefault();
  console.log("...");
}
  const styles = {
    Typography: { color: "textPrimary" },
    root: { width: 700 },
    media: { height: 240 },
    containt: { maxWidth: 900 },
  };

const UiCard = ({ data }) => {
  let lastKey = Object.keys(data).pop().split("_")[1];
  let lastValue = data[Object.keys(data).pop()];

  return (
    <Card>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          style={styles.media}
          image={require(`../../Image/${data.ImageName}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" color="primary">
            {data.Idicator} ({lastKey})
          </Typography>
          <div>
            Data from
            <Typography
              variant="subtitle2"
              color="primary"
              componet="span"
              display="inline"
            >
              {` tradingeconomics `}
            </Typography>
            Last updated: Apr 8, 2020
          </div>
          <Box mt={3} mb={1}>
            <Typography   display="inline" variant="h3">
              {lastValue}
            </Typography>
            <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  display="inline"
                >
                  {`  (${data.IndicatorUnit})`}
                </Typography>
          </Box>
          <Typography variant="body1" color="text.primary">
            {data.paragraph}{Math.random()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <TimeSeries data={data} />
    </Card>
  );
};
export default React.memo(UiCard)