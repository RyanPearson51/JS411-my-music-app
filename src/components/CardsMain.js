import * as React from 'react';
import {useState} from 'react';
 import TitleBar from './TitleBar'
import OnlineCard from './OnlineCard'
import VolumeCard from './VolumeCard'
import QualityCard from './QualityCard'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'

import '../App.css';


export default function CardsMain() {

    const [isOnline, setIsOnline] = useState(true)
    const [isVolumeHigh, setIsVolumeHigh] = useState(false)
    const [isQualityLow, setIsQualityLow] = useState(false)

  return (
    <div className="App">
        <Typography class='welcome'>
          Welcome User!
      </Typography>
    <Container  className='dashboard'>
      
      <Grid container spacing={.5} columns={3} justifyContent="center">
      <OnlineCard isOnline={isOnline} setIsOnline={setIsOnline}/>
      <VolumeCard isVolumeHigh={isVolumeHigh} setIsVolumeHigh={setIsVolumeHigh}/>
      <QualityCard isQualityLow={isQualityLow} setIsQualityLow={setIsQualityLow}/>
      </Grid>
      <br></br><br></br>
      
      </Container>
      <h2 className='notifications'>System Notifications:</h2>
      <ol>
      {!isOnline && <li>Your application is offline. You won't be able to share or stream music to other devices.</li>}
      {isVolumeHigh>=80 && <li>Listening to music at a high volume could cause long-term hearing loss.</li>}
      {isQualityLow==="low" && <li>Music quality is degraded. Increase quality if your connection allows it.</li>}
      </ol>
    </div>
  );
}

