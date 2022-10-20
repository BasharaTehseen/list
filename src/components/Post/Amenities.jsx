import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import Stack from '@mui/material/Stack';
const Amenities = () => {
  return (
    <Box sx={{ flexGrow: 1,
      margin:'auto',
     
      padding: 1,
      width: 500,
      height: 200,
      backgroundColor: 'White',}}>
        <Stack>
      <Grid
        container
        margin="auto"
        rowSpacing={1}
        columnSpacing={{ xs: 0, sm: 0, md: 0 }}
        sx={{ display: "inline-flex", justifyContent: "space-between" }}
      >
        <Grid item xs={1}>
          <MilitaryTechOutlinedIcon fontSize="large"sx={{width:25,height:35}}/>
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h5"> Grove is a Superhost</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography color="inherit"> </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography color="inherit"> Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</Typography>
        </Grid>
        
      
     
     
        <Grid item xs={1}>
          <LocationOnOutlinedIcon fontSize="medium"sx={{width:23,height:30}}/>
        </Grid>
        <Grid item xs={11}>
        <Typography variant="h5" fontStyle="arial"> Great location</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography color="inherit"> </Typography>
        </Grid>
        <Grid item xs={11}>
          <Typography color="inherit"> 95% of recent guests gave the location a 5-star rating.</Typography>
        </Grid>
        
      

      
        <Grid item xs={1}>
          <CalendarTodayOutlinedIcon fontSize="medium" sx={{width:20,height:30}} />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h5"> Free cancellation before Oct 29.</Typography>
        </Grid>
        
      </Grid>
      </Stack>
      <br></br>
<hr></hr>
    </Box>
    
    
  );
};

export default Amenities;