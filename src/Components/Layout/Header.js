import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // blue and grey play nicely together.
      main: "#2196f3",
      light: "#e3f2fd",
      dark: "#0d47a1",
      contrastText: "#fff",
    },
    secondary: {
      // This is grey
      main: "#9e9e9e",
      light: "#e0e0e0",
      dark: "#212121",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Demographic
          </Typography>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </div>
  );
};
