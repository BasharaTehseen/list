import * as React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FlatwareIcon from '@mui/icons-material/Flatware';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import YardOutlinedIcon from '@mui/icons-material/YardOutlined';
import FireplaceOutlinedIcon from '@mui/icons-material/FireplaceOutlined';
import KitchenOutlinedIcon from '@mui/icons-material/KitchenOutlined';
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import SanitizerOutlinedIcon from '@mui/icons-material/SanitizerOutlined';
import HotTubIcon from '@mui/icons-material/HotTub';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import RollerShadesIcon from '@mui/icons-material/RollerShades';
import KingBedIcon from '@mui/icons-material/KingBed';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';
import CoffeeMakerOutlinedIcon from '@mui/icons-material/CoffeeMakerOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};









  const Details = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Box sx={{ flexGrow: 1,
      margin:'auto',
     
      padding: 2,
      width: 500,
      height: 300,
      backgroundColor: 'White',}}>
        <hr></hr>
        <br></br>
        <Typography variant="h6"><b>What this place offers</b></Typography>
        <br></br>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={1}>
          <FlatwareIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Kitchen</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <WifiOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Wifi</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <TimeToLeaveIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b> Free parking on premises</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <AcUnitIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>AC - split type ductless system</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <BalconyOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Patio or balcony</b></Typography>
        </Grid>
        <Grid item xs={1}>
          < YardOutlinedIcon  fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Backyard</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <FireplaceOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Indoor Fireplace</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <KitchenOutlinedIcon  fontSize="medium" />
        </Grid>
        <Grid item xs={5}>
          <Typography variant="h7"> <b>Refrigerator</b></Typography>
        </Grid>
        
        
        </Grid>
        <br></br>
        <br></br>
<div>
        <Button variant="outlined" onClick={handleClickOpen} color="inherit">
        Show all amenities
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
            What this place have
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}> 
        <Grid item xs={12}>
        <Typography variant="h6"> Bathroom</Typography>
        </Grid>
        <Grid item xs={1}>
          <SanitizerIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Shampoo</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <SanitizerIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Conditioner</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <SanitizerOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b> Body Soap</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <SanitizerOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Shower Gel</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <HotTubIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Hot Water</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Bedroom and laundry</Typography>
        </Grid>
        <Grid item xs={1}>
          <  CheckroomIcon   fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Hanger</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <RollerShadesIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Room-darkening shades</b></Typography>
        </Grid>
        <Grid item xs={1}>
          < KingBedIcon   fontSize="medium" />
        </Grid>
        
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Bed Linens</b></Typography>
        </Grid>
         
        <Grid item xs={12}>
        <Typography variant="h6"> Heating and Cooling</Typography>
        </Grid>
        <Grid item xs={1}>
          <AcUnitIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>AC - split type ductless system</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <FireplaceOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Indoor Fireplace</b></Typography>
        </Grid>
        
        <Grid item xs={1}>
          <DeviceThermostatOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Heating</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Internet</Typography>
        </Grid>
        
        <Grid item xs={1}>
          <WifiOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Wifi</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Kitchen and Dinning</Typography>
        </Grid>
        <Grid item xs={1}>
          <FlatwareIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Kitchen</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <KitchenOutlinedIcon  fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Refrigerator</b></Typography>
        </Grid>
        
        <Grid item xs={1}>
          <RiceBowlOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b> Dishes and silverwares</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <CoffeeMakerOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Coffee Marker</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Outdoor</Typography>
        </Grid>
        <Grid item xs={1}>
          <BalconyOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Patio or balcony</b></Typography>
        </Grid>
        
        <Grid item xs={1}>
          < YardOutlinedIcon  fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Backyard</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Parking and Facility</Typography>
        </Grid>
        <Grid item xs={1}>
          <TimeToLeaveIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b> Free parking on premises</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <TimeToLeaveIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b> Free street parking</b></Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h6"> Services</Typography>
        </Grid>
        <Grid item xs={1}>
          <CalendarTodayOutlinedIcon fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Long term stay allowed</b></Typography>
        </Grid>
        <Grid item xs={1}>
          <KitchenOutlinedIcon  fontSize="medium" />
        </Grid>
        <Grid item xs={11}>
          <Typography variant="h7"> <b>Refrigerator</b></Typography>
        </Grid>
        
        </Grid>
        </DialogContent>
        
      </BootstrapDialog>
    </div>
     <br></br>
      
    </Box>
  );
};

export default Details;