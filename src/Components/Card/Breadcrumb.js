import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import LocationCity from "@material-ui/icons/LocationCity";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

const Breadcrumb = ({ province, onChang }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          href="#"
          underline="hover"
          color="primary"
          onClick={() => onChang('Thailand')}
          className={classes.link}
        >
          <HomeIcon className={classes.icon} />
          Thailand
        </Link>
        {province !== "Thailand" ? (
          <Typography color="secondary" className={classes.link}>
            <LocationCity className={classes.icon} />
            {province}
          </Typography>
        ) : null}
      </Breadcrumbs>
    </Fragment>
  );
};

export default Breadcrumb;
