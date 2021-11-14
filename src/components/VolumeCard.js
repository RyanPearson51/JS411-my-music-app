import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import  Typography  from "@mui/material/Typography";


function valuetext(value) {
  return `${value}°C`;
}



export default function VolumeCard() {
  return (
    <Card sx={{maxWidth: 275}}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Master Volume
        </Typography>
        <Typography variant='body2'>
        Overrides all other sound settings in this application
        </Typography>
        <CardActions>
        <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
        
        </CardActions>
      </CardContent>
    </Card>
  );
}


/*<Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>*/