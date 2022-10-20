import React from "react";

import { useEffect, useRef, useState } from "react";
import PCard from "../../components/Post/PCard";
import Heading from "../../components/Post/Heading";
import Image from "../../components/Post/Image";
import RoomD from "../../components/Post/RoomD";
import Amenities from "../../components/Post/Amenities";
import Details from "../../components/Post/Details";
import { addDays } from "date-fns";
import Calendar from "../../components/Post/Calender"
import Calender from "../../components/Post/Calender";

const Post=()=>{
    const [range, setRange] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(),0),
          key: "selection",
        },
      ]);
      
    return( 
        <>
       <Heading/>
       <Image/>
       <br></br>
       <RoomD/>
       
       <Amenities/>
       <Details/><br></br>
       
    
    <PCard
        range={range}
        onChange={(item) => setRange([item.selection])}
    />
    <Calender
        range={range}
        onChange={(item) => setRange([item.selection])}
    />
   
    
    </>

    )
}
export default Post;
