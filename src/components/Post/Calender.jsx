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

const Calender= ({range, onChange}) =>{

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
      
      
      <Box  sx={{display:'flex', }}
      
      >
        <DatePicker
        range={range}
        onChange={onChange}
        
        
        />
      </Box>
      
   
    </>
    
    )
}
export default Calender