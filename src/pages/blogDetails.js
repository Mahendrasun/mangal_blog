import React from 'react'
import {useParams} from 'react-router-dom';
import { Typography,Box,Container,Grid,Button,Card,CardMedia,CardActions,CardContent,Paper } from "@material-ui/core";
import useStyle from './styles';

// ProductDetails.js
const BlogDetails = () => {



   const classes = useStyle();
    const params = useParams();
    console.log(params.id);
    const {id} = params;
    console.log(id);
    // console.log(blogId);
    return (
      <Container maxWidth="lg">
      {/* <div className={classes.homeDiv}>
  
        <Typography variant="h1" align="center" color="textPrimary" gutterBottom> Mangal Prasad Pradhan</Typography>
      </div> */}
  
  <Container maxWidth='sm' >
  
  <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 'auto',
        },
      }}
    >
      {/* <Paper elevation={0} />
      <Paper /> */}
      <Paper elevation={10} className={classes.Paper} >
      <Card style={{padding:'10px'}}>
        <CardMedia className={classes.cardMediaD} image="https://source.unsplash.com/random" title="Image title"/>
    </Card>
      <div className={classes.blogDetail}>
         <Typography variant='h5' gutterBottom>Where does it come from?</Typography>
         <Typography > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>
</div>
      </Paper>

    </Box>

              </Container>
       
            <div style={{height:"100px"}}></div>
        </Container>
    
    );
   };
   
   export default BlogDetails;