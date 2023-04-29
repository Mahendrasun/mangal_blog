import React from "react";
import {
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Container
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  footer:{
    position: "fixed",
	left: 0,
	bottom: 0,
	width: '100%',
	backgroundColor: '#3f51b5',
	color: '#fff',
	textAlign: 'center'
  }
}));

function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
    <div className={classes.footer}>
	<Typography variant="h6">Copyright © 2023 Mangal Prasad All rights reserved.</Typography>
</div>
</>
  );
}
export default Footer;