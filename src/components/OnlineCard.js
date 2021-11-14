import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import  Typography  from "@mui/material/Typography";

import Switch from '@mui/material/Switch';

export default function OnlineCard({ isOnline, setIsOnline}) {
  
  const handleChange = () => {
    setIsOnline(!isOnline);
  };

  return(
    <Card sx={{maxWidth: 275}}>
      <CardContent>
        <Typography variant='h5' component='div'>
          Online Mode
        </Typography>
        <Typography variant='body2'>
          Is this application connected to the internet?
        </Typography>
        <CardActions>
          <Switch checked={isOnline} onChange={handleChange}/>
        </CardActions>
      </CardContent>
    </Card>
  )
}