
import { Typography,Box,Container,Grid,Button,Card,CardMedia,CardActions,CardContent } from "@material-ui/core";
import useStyle from './styles';
function About() {

  const classes = useStyle();
  
  return (
  
  <>
 <Container maxWidth="lg"  style={{height:'100px'}}>
    {/* <div className={classes.homeDiv}>

      <Typography variant="h1" align="center" color="textPrimary" gutterBottom> Mangal Prasad Pradhan</Typography>
    </div> */}
<Box sx={{height:'200px'}}></Box>
<Container maxWidth='sm' >
<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
    Mangal Prasad
</Typography>

<Typography variant="h5" align="center" color="textSecondary" paragraph>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
</Typography>
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
      </Container>
  </>
  
  );
}
export default About;
