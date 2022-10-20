import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={guest}
     //sx={{ width:250,p:5,align:'centers'}}
      renderInput={(params) => <TextField {...params} label="Guest" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const guest = [
  { label: 'Single' },
  { label: '2 Adults' },
  { label: '3 Adults' },
  { label: '4 Adults' },
  { label: '5 Adults' },
  { label: '6 Adults' },
  { label: '7 Adults' },
  

  
];
