import React from 'react';
import Box from '@mui/material/Box';
import {  IconButton,Typography } from '@mui/material';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from '@mui/material/Link';
import Grid from "@mui/material/Grid";
import StarIcon from '@mui/icons-material/Star';
import GppGoodIcon from '@mui/icons-material/GppGood';


 const Heading=()=>{
    return( 
    <Box sx={{
        margin:'auto',
        width: 1200,
        height: 100,
        backgroundColor: 'White',
        '&:hover': {
          backgroundColor: 'White',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
        <Typography variant="h4"> Grove Cab</Typography>
        </Grid> 
        <Grid item xs={10}>
          <StarIcon fontSize="small" /><Typography variant="h7"><b>5.0 ·51 reviews·</b></Typography> &nbsp;
          <GppGoodIcon fontSize="small" /><Typography variant="h7">Superhost</Typography> &nbsp; &nbsp;
          <Link href="#" color="inherit" variant="h7"><b>Vysloboky, Lviv Oblast, Ukraine</b></Link>
        </Grid>
        
        <Grid item xs={1}>
        <IosShareIcon fontSize="small"/> <Link href="#" color="inherit" variant="h7"><b>Share</b></Link>
        </Grid>
        <Grid item xs={1}>
        <FavoriteIcon fontSize="small"/> <Link href="#" color="inherit" variant="h7"><b>Save</b></Link>
        </Grid>
        </Grid>
        
       
    </Box> 
 
   
    

    )
}
export default Heading;