import { makeStyles } from "@material-ui/core";
const useStyle = makeStyles((theme)=>({
    homeDiv:{
        marginTop:'20px',
        // height:'200px',
        width:'100%',
        paddingTop:'56.25%',
        backgroundImage: "url('https://source.unsplash.com/randompaper.gif')"
    },
    button:{
    marginBottom:'30px'  
    },
    box:{
        boxShadow:'10px 10px 5px #3f51b5',
        marginBottom:'20px'
    },
    container:{
        backgroundColor:theme.palette.background.paper,
        padding:theme.spacing(8,0,6)
    },
    icon:{
marginRight:'20px',

    },
    button:{
marginTop:'40px',
marginBottom:'20px'
    },
    cardGrid:{
padding:'20px 0'
    },
    card:{
height:'100%',
display:'flex',
flexDirection:'column'
    },
    cardMedia:{
paddingTop:'56.25%'
    },
    cardContent:{
flexGrow:1
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding:'50px 0'
    },
    buttonDiv:{
        justifyContent:'center'
    },
    blogDetail:{
        padding:'40px',

    },
    Paper:{
        marginTop:'50px'
    },
    cardMediaD:{
        paddingTop:'56.25%',
        padding:'10px'

    }

}));

export default useStyle ;