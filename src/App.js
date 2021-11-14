import {useState} from 'react';
import OnlineCard from './components/OnlineCard';
import VolumeCard from './components/VolumeCard';
import QualityCard from './components/QualityCard'
import './App.css';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';


function App() {
  const [isOnline, setIsOnline] = useState(true)
  const [isVolumeHigh, setIsVolumeHigh] = useState(false)
  const [isQualityLow, setIsQualityLow] = useState(false)
  
  return (
    <div className="App">
      <Grid container spacing={0} columns={16}>
      <OnlineCard isOnline={isOnline} setIsOnline={setIsOnline}/>
      <VolumeCard isVolumeHigh={isVolumeHigh} setIsVolumeHigh={setIsVolumeHigh}/>
      <QualityCard isQualityLow={isQualityLow} setIsQualityLow={setIsQualityLow}/>
      </Grid>
      <h1>System Notifications</h1>
      {!isOnline && <ol>Your application is offline. You won't be able to share or stream music to other devices.</ol>}
    </div>
  );
}

export default App;
