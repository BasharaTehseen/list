import { Box,  } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';



const RoomD=()=>{
    return( 
<Box sx={{
        margin:'auto',
        padding: 5,
        width: 500,
        height: 100,
        backgroundColor: 'White',
        '&:hover': {
          backgroundColor: 'White',
          opacity: [0.9, 0.8, 0.7],
        }
    }}>
        <Stack direction="row" spacing={10}>
       <div> <h2><b>Entire home hosted by Grove</b></h2>  
       
              <p>2Guests . 1Bedroom . 1Bed . 1Bath </p></div>
              <Avatar alt="Remy Sharp" src="https://a0.muscache.com/im/pictures/user/df2072f5-f3d0-458e-8cf6-b4d1d497b7cc.jpg?aki_policy=profile_large" sx={{ width: 56, height: 60 }}/>
              </Stack>
              <hr></hr>
        
       
      
        </Box>


    )
}
export default RoomD;
