import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
} from "@material-ui/core";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  CssBaseline,
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Link from "@material-ui/core/Link";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Listroot: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  Listnested: {
    paddingLeft: theme.spacing(4),
  },
}));

const removeDuplicate = (listProvinces) => {
  return listProvinces.filter((val, id, array) => array.indexOf(val) === id);
};

const Filter = ({ provinceList, onChang }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openC, setOpenC] = useState(false);
  const [openN, setOpenN] = useState(false);
  const [openNW, setOpenNW] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [central, setCentral] = useState([]);
  const [northern, setNorthern] = useState([]);
  const [northeastern, setNortheastern] = useState([]);
  const [southern, setSouthern] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClickC = () => {
    setOpenC(!openC);
  };
  const handleClickN = () => {
    setOpenN(!openN);
  };
  const handleClickNW = () => {
    setOpenNW(!openNW);
  };
  const handleClickS = () => {
    setOpenS(!openS);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let centralProvince = provinceList
      .filter((val) => val.region === "Central")
      .map((val) => val.Province);
    let northernProvince = provinceList
      .filter((val) => val.region === "Northern")
      .map((val) => val.Province);
    let northeasternProvince = provinceList
      .filter((val) => val.region === "Northeastern")
      .map((val) => val.Province);
    let southernProvince = provinceList
      .filter((val) => val.region === "Southern")
      .map((val) => val.Province);
    setCentral(removeDuplicate(centralProvince));
    setNorthern(removeDuplicate(northernProvince));
    setNortheastern(removeDuplicate(northeasternProvince));
    setSouthern(removeDuplicate(southernProvince));
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap>
              <Link href="#" color="inherit" underline="none" onClick={() => onChang('Thailand')}>
                Demographic
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <div className={classes.drawerContainer}>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Select Region
                </ListSubheader>
              }
              className={classes.Listroot}
            >
              <ListItem button onClick={() => handleClickC()}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Central" />
                {openC ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {central.map((val, id) => (
                <Collapse in={openC} key={id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.Listnested}
                      onClick={(event) => onChang(val)}
                    >
                      <ListItemIcon>
                        <LocationCityIcon />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
              <ListItem button onClick={() => handleClickN()}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Northern" />
                {openN ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {northern.map((val, id) => (
                <Collapse in={openN} key={id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.Listnested}
                      onClick={(event) => onChang(val)}
                    >
                      <ListItemIcon>
                        <LocationCityIcon />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
              <ListItem button onClick={() => handleClickNW()}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Northeaster" />
                {openNW ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {northeastern.map((val, id) => (
                <Collapse in={openNW} key={id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.Listnested}
                      onClick={(event) => onChang(val)}
                    >
                      <ListItemIcon>
                        <LocationCityIcon />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
              <ListItem button onClick={() => handleClickS()}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary={"Southern"} />
                {openS ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              {southern.map((val, id) => (
                <Collapse in={openS} key={id} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      className={classes.Listnested}
                      onClick={(event) => onChang(val)}
                    >
                      <ListItemIcon>
                        <LocationCityIcon />
                      </ListItemIcon>
                      <ListItemText primary={val} />
                    </ListItem>
                  </List>
                </Collapse>
              ))}
            </List>
          </div>
        </Drawer>
      </div>
    </React.Fragment>
  );
};

export default Filter;
