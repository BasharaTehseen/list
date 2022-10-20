import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CheckOut=()=>{
    const [value, setValue] = React.useState(null);
    return( 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Check-Out"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        /> 
         
      </LocalizationProvider>

    )
}
export default CheckOut;

