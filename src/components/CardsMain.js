import * as React from 'react';
import {useState} from 'react';
 import TitleBar from './TitleBar'
import OnlineCard from './OnlineCard'
import VolumeCard from './VolumeCard'
import QualityCard from './QualityCard'
import Grid from '@mui/material/Grid';

import '../App.css';


export default function CardsMain() {

    const [isOnline, setIsOnline] = useState(true)
    const [isVolumeHigh, setIsVolumeHigh] = useState(false)
    const [isQualityLow, setIsQualityLow] = useState(false)

  return (
    <div className="App">
      
      <Grid container spacing={0} columns={3}>
      <OnlineCard isOnline={isOnline} setIsOnline={setIsOnline}/>
      <VolumeCard isVolumeHigh={isVolumeHigh} setIsVolumeHigh={setIsVolumeHigh}/>
      <QualityCard isQualityLow={isQualityLow} setIsQualityLow={setIsQualityLow}/>
      </Grid>
      <h1>System Notifications</h1>
      {!isOnline && <ol>Your application is offline. You won't be able to share or stream music to other devices.</ol>}
    </div>
  );
}