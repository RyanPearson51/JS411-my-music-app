import {useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';

const label = { inputProps: { 'aria-label': 'Switch demo'} };


export default function BasicCard({state, setState, title, body, component: Component}) {
   
    const handleOnline = () => {
        setState(!state)
      }
/*
    const handleVolume = () => {
        setState({volume: value})
    }  

    const handleQuality = () => {
        setState({quality: event.target.value})
    }
*/
  return (
  <div> 
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <br></br>
        <Typography variant="body2">
          {body}
          <br />
          
        </Typography>
      </CardContent>
      <CardActions>
        <Switch {...label} checked={state} onChange={handleOnline}/> 
      </CardActions>
    </Card>
  </div>
  );
}


//        <Switch {...label} checked={state} onChange={handleChange}/>

//<Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
