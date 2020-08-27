import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import PieChart from '../Chart/PieChart';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontSize: "2rem",
    color: "#0d47a1",
    display: "inline",
    fontWeight: "500",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.1rem",
    },
  },
  head: {
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
}));

function formatNumbertoDecimal(number) {
  if (number === null) return null;
  else
    return new Intl.NumberFormat("en-ca", { style: "decimal" }).format(number);
}

const productiveObject = {
  preProductive: null,
  reProductive: null,
  postProductive: null,
  totalPopulation: null,
  totalUndefine: null,
};

const PieCard = ({ productive }) => {
  const [productiveDetail, setProductiveDetail] = useState([productiveObject]);

  useEffect(() => {
    setProductiveDetail({
      preProductive: formatNumbertoDecimal(productive.preReProductive),
      reProductive: formatNumbertoDecimal(productive.reProductive),
      postProductive: formatNumbertoDecimal(productive.postProductive),
      totalPopulation: formatNumbertoDecimal(productive.Total),
      totalUndefine: formatNumbertoDecimal(productive.unDefine),
    });
    return () => {
      setProductiveDetail({
        preProductive: 0,
        reProductive: 0,
        postProductive: 0,
        totalPopulation: 0,
        totalUndefine: 0,
      });
    };
  }, [productive]);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box pt={3}>
        <Card>
          <Box py={4} px={7} align="center">
            <Typography
              color="secondary"
              variant="h5"
              display="inline"
              className={classes.head}
            >
              Total population of
              <Typography
                varaint="h1"
                color="primary"
                align="center"
                className={classes.typography}
              >
                {` ${productive.Name} `}
              </Typography>
              is{" "}
              <Typography
                className={classes.typography}
              >{` ${productiveDetail.totalPopulation} `}</Typography>
              and have people are not registered{" "}
              <Typography
                className={classes.typography}
              >{` ${productiveDetail.totalUndefine} `}</Typography>
              and it has the{" "}
              <Typography className={classes.typography}>{` ${Number(
                productive.Rank
              ).toFixed(0)}th `}</Typography>
              largest population in the{" "}
              {productive.Name === "Thailand" ? ` world ` : ` country `} with
              the population of the
              <Typography
                className={classes.typography}
              >{` pre-reproductive `}</Typography>
              at{" "}
              <Typography
                className={classes.typography}
              >{` ${productiveDetail.preProductive} `}</Typography>
              and{" "}
              <Typography
                className={classes.typography}
              >{` reproductive `}</Typography>
              at{" "}
              <Typography
                className={classes.typography}
              >{` ${productiveDetail.reProductive} `}</Typography>{" "}
              and
              <Typography
                className={classes.typography}
              >{` post-reproductive `}</Typography>
              at{" "}
              <Typography
                className={classes.typography}
              >{` ${productiveDetail.postProductive} `}</Typography>
            </Typography>
          </Box>
          <PieChart productive={productive} />
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default PieCard;
