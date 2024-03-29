import { Box, Grid, Stack, Typography } from "@mui/material";
import moviePoster from '../assets/MoviePoster.png';
import youposter from '../assets/you.png';
import firstPerson from '../assets/wallpapersden2.png';
import secondPerson from '../assets/wallpapersden1.png';


const ImageContainer = () => {
    return (
        //main container
        <Box sx={{ fontFamily:'Poppins' , color:'white' ,  minHeight:'100vh',  backgroundImage: 'linear-gradient(to left,rgba(10, 13, 24, 0.9) 40.88%,rgba(10, 13, 24, 0.6) 84.09%, rgba(10, 13, 24, 0.8) 99.57%)',  backgroundColor:'#0A0D18'  }}>
        {/* grid tag */}
        <Grid container sx={{height:'100%'}} >
         {/* first item */}
          <Grid item sx={{height:'100%' }} xs={12} sm={12} md={5} lg={5}>
            <Stack justifyContent='space-around' alignItems='flex-start' sx={{width:'100%' , height:'100%' , marginLeft:'20%'}} gap={4}>
            {/* Stack of text and image left section */}
            <Stack direction='column' justifyContent='space-around' alignItems='flex-start' sx={{  width:'auto'   }} >
            <Typography component='p' fontSize='1.5rem' fontWeight='500px' textAlign='start'>Exclusive originals</Typography>
            {/* inner text stack */}
            <Stack direction='row' justifyContent='space-evenly' alignItems='center' gap={1}>
            <Typography component='p' fontSize='1.5rem' fontWeight='500px' textAlign='start'>Watch</Typography>
            <Typography  component='p' fontSize='1.5rem' fontWeight='bold' textAlign='start'> All</Typography>
            </Stack>
           <Typography component='p' fontWeight='500px' fontSize='1.5rem'  textAlign='start'>originals Latest</Typography>
           <Typography component='p' fontWeight='bolder' fontSize='2rem'  textAlign='start'>Movies </Typography>
            </Stack>

            {/* movie poster */}
             <Box sx={{backgroundImage:`url(${moviePoster})` , width:'450px' , height:'700px' , backgroundRepeat:'no-repeat' , backgroundSize:'cover'}}>
                
             </Box>
            </Stack>
          </Grid>
        {/* second item */}
        <Grid item sx={{height:'100%' }} xs={12} sm={12} md={7} lg={7}>
            {/* Stack of the stacks */}
            <Stack direction='row' sx={{width:'100%' , height:'100%'}} justifyContent='space-around' alignItems='center' >
                {/* stack one */}
        <Stack justifyContent='space-around' alignContent='center' sx={{height:'100%'}} gap={2}>
            <Box sx={{backgroundImage:`url(${youposter})`, width:'350px' , height:'450px'}}></Box>
            <Box sx={{backgroundImage:`url(${firstPerson})`, width:'350px' , height:'450px'}}></Box>
        </Stack>
        {/* stack two */}
        <Stack justifyContent='center' alignContent='center' sx={{backgroundColor:'red'}}>
        <Box sx={{backgroundImage:`url(${secondPerson})`, width:'350px' , height:'450px'}}></Box>
        </Stack>
        </Stack>
          </Grid>
          

        </Grid>
      </Box>
    );
};

export default ImageContainer;