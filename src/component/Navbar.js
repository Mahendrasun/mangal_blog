import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(5),
    borderBottom: "1px solid transparent",
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="sticky" >
      <CssBaseline />
      <Container maxWidth="lg">
      <Toolbar>
        <Typography variant="h6"   gutterBottom className={classes.logo}>
          Mangal Prasad 
          
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              <Typography variant="h6">Home</Typography>
            </Link>
            <Link to="/about" className={classes.link}>
            <Typography variant="h6">About</Typography>
            </Link>
            <Link to="/contact" className={classes.link}>
            <Typography variant="h6">Contact</Typography>
            </Link>
            <Link to="/blogs" className={classes.link}>
            <Typography variant="h6">Blog</Typography>
            </Link>
          </div>
          
        )}
      </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
