import { Typography,Box,Container,Grid,Button,Card,CardMedia,CardActions,CardContent,SvgIcon,makeStyles } from "@material-ui/core";
import useStyle from './styles';

function HomeIcon(props) {
  return (
    <SvgIcon {...props} style={{color:'#3f51b5'}}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  address: {
    display: "flex",
    marginLeft:'80px'
  },
  inneraddress:{
    marginLeft:'10px',
  },
  
}));

function Contact() {
  const classes = useStyles();
  return (<Container maxWidth="lg"  style={{height:'100px'}}>
  {/* <div className={classes.homeDiv}>

    <Typography variant="h1" align="center" color="textPrimary" gutterBottom> Mangal Prasad Pradhan</Typography>
  </div> */}
<Box sx={{height:'200px'}}></Box>
<Container maxWidth='sm' >
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
  keep In Touch
</Typography>

<div className={classes.address}> <HomeIcon color="success" className={classes.inneraddress}/><Typography className={classes.inneraddress}>Avirahi Home 3<br></br>Borivali West<br></br>9861465899</Typography></div>



<div className={classes.button} >
  <Grid container spacing={2} justifyContent="center"   alignItems="center">
{/* <Grid item xs={6} >
  <Button component={Link} to="/about" variant="contained" color="primary" >
      know More.. 
  </Button>
</Grid> */}

  </Grid>
</div>
          </Container>
     
        <div style={{height:"100px"}}></div>
    </Container>);
}
export default Contact;
