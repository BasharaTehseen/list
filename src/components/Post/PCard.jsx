import React from 'react';
import Card from '@mui/material/Card';
import { useEffect, useRef, useState } from "react";
import CardHeader from '@mui/material/CardHeader';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import CheckIn from '../../components/Post/CheckIn';
import CheckOut from '../../components/Post/CheckOut';
import Guest from '../../components/Post/Guest';
import ReserveButton from '../../components/Post/ReserveButton';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import DatePicker from "../../components/Post/DatePicker";

const PCard= ({range, onChange}) =>{

  const [totalDays, settotalDays] = useState();
  function getDifferenceInDays(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60 * 24);
  }
  useEffect(()=>{
    let date = getDifferenceInDays(range[0].startDate, range[0].endDate);
    settotalDays(date+1);
    console.log("Helo")
    console.log(date);
  },[onChange])

    return(
       
     <>      
     <Card  sx={{ maxWidth: '80%',m:2,borderRadius: "20px"}}>
        
        <Box sx={{
          margin:3, 
          pagging:2
        }}>
        
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={7}>
        <Typography variant="h4"> <b>$ {totalDays * 10}</b> night</Typography>
        </Grid>
        <Grid item xs={5}>
          <StarIcon fontSize="small" sx={{height:17,width:25}}/><Typography variant="h7"><b>5.0 ·51 reviews·</b></Typography> &nbsp;
         
        </Grid> 
        </Grid>
        
        </Box>
      
      
      <CardContent sx={{display:'flex', }}
      
      >
        <DatePicker
        range={range}
        onChange={onChange}
        
        
        />
      </CardContent>
      
    <CardContent >
      <Guest/>
       </CardContent>
       <hr/>

      
      
      <CardContent >
        <ReserveButton/>
        </CardContent>
      
       
       
      
    </Card>
    
   
   
    
    </>
    
    )
}
export default PCard