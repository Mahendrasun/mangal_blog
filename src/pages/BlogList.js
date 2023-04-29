import React from 'react'
import { Typography,Box,Container,Grid,Button,Card,CardMedia,CardActions,CardContent } from "@material-ui/core";
import useStyle from './styles';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


// ProductDetails.js
const cards = [1,2,3,4,5,6,7,8,9]
const BlogList = () => {

    const params = useParams();
    console.log(params.id);
    const {id} = params;
    console.log(id);
    const classes = useStyle();
  return (
  <>
  <Container maxWidth="lg">
    {/* <div className={classes.homeDiv}>

      <Typography variant="h1" align="center" color="textPrimary" gutterBottom> Mangal Prasad Pradhan</Typography>
    </div> */}

    <Box sx={{height:'50px'}}></Box>

        <Box sx={{ bgcolor: '#fff', height: 'auto' }} className={classes.box} >


        <Container className={classes.cardGrid} maxWidth="md">
<Grid container spacing={4}>
{cards.map((card)=>(
    
    <Grid item key={card} xs={12} sm={6} md={4} >
    <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title"/>
<CardContent className={classes.cardContent} >
<Typography gutterBottom variant="h5">
What is Lorem Ipsum?
</Typography>
<Typography>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
</Typography>
<CardActions className={classes.buttonDiv}>
    
<Button size="small" variant="outlined" color="primary" component={Link} to={'/blog/'+card } >Read More</Button>

    
</CardActions>

</CardContent>

    </Card>
</Grid>

))}  
</Grid>    

</Container>
          </Box>
          <div style={{height:"100px"}}></div>
      </Container>
  
 
  </>);
   };
   
   export default BlogList;