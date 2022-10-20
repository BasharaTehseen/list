import * as React from 'react';

import Button from '@mui/material/Button';

/*import { styled } from '@mui/material/styles';

import { purple } from '@mui/material/colors';


const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  fontSize:20,
  maxWidth:'300px',
  position: 'center',
  margin:'auto',

  '&:hover': {

    backgroundColor: purple[700],
  },
}));*/

export default function BasicButtons() {
  return (
   <div align="center"><Button variant="contained" sx={{size:"large",fontSize:20,
    maxWidth:'300px',align:"center',margin:'auto"}} color="error" >Reserve</Button></div> 
      
   
  );
}
